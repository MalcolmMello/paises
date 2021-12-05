import * as C from './styles'
import { useEffect, useState } from 'react'
import CountriesAPI from '../../helpers/CountriesAPI'

export const MainContent = () => {
    const [allCountries, setAllCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('Africa')
    const [widthCalc, setWidthCalc] = useState(225)

    //paginação
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const totalPages = Math.ceil(allCountries.length / itemsPerPage)
    const startIndex = currentPage*itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    const currentItems = allCountries.slice(startIndex, endIndex)


    const getAllCountries = async () => {
        let json = await CountriesAPI.getAllCountries()
        if(json !== '') {
            setAllCountries(json)
          } else {
            alert('resultado não encontrado')
          }
    }

    useEffect(()=>{
        getAllCountries()
    }, [])

    const getCountries = async () => {
        if(filter === 'Região') {
            let json = await CountriesAPI.getCountriesRegion(search)
    
            if(json !== '') {
                setAllCountries(json)
              } else {
                alert('resultado não encontrado')
              }
        }
        if(filter === 'Capital') {
            let json = await CountriesAPI.getCountriesCapital(search)
    
            if(json !== '') {
                setAllCountries(json)
              } else {
                alert('resultado não encontrado')
              }
        }
        if(filter === 'Língua') {
            let json = await CountriesAPI.getCountriesLang(search)
    
            if(json !== '') {
                setAllCountries(json)
              } else {
                alert('resultado não encontrado')
              }
        } 
        if(filter === 'País') {
            let json = await CountriesAPI.getCountriesName(search)
    
            if(json !== '') {
                setAllCountries(json)
              } else {
                alert('resultado não encontrado')
              }
        }
    }
    
    useEffect(()=>{
        setSearch('')
    },[filter])

    const handleRight = () => {
        setWidthCalc(widthCalc-225)
    }

    const handleLeft = () => {

    }
    return (
        <C.Container>
            <C.TopArea>
                <C.SelectArea>
                    <C.Filter>
                        Filtrar por
                    </C.Filter>
                    <C.Select placeholder="Escolha sua opção" value={filter} onChange={e=>setFilter(e.target.value)}>
                        <option></option>
                        <option className="options">Região</option>
                        <option className="options">Capital</option>
                        <option className="options">Língua</option>
                        <option className="options">País</option>
                    </C.Select>
                </C.SelectArea>
                {filter !== '' &&
                    <C.SearchInput>
                        <C.Filter>
                            {filter}
                        </C.Filter>
                        {filter === 'Região' &&
                            <C.Select onChange={e=>setSearch(e.target.value)}>
                                <option className="options">Africa</option>
                                <option className="options">America</option>
                                <option className="options">Asia</option>
                                <option className="options">Europe</option>
                                <option className="options" >Oceania</option>
                            </C.Select>
                        } 
                        {filter !== 'Região' &&
                            <C.Input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
                        }
                    </C.SearchInput>
                }

                <C.Button onClick={getCountries}>
                    Pesquisar
                </C.Button>
            </C.TopArea>
            <C.FlagArea>
                {currentItems.length > 0 &&
                    currentItems.map((item, index) => {
                        const { id, flags } = item
                        
                        return <article key={id}>
                            <C.Flag className='flags' src={flags.png}/>
                        </article>       
                    })
                }
            </C.FlagArea>
            <C.ButtonArea>
                <C.SideButton onClick={handleLeft}>
                    <img src="https://img.icons8.com/color/18/ffffff/long-arrow-left.png"/>
                </C.SideButton>
                <C.ButtonMain style={{width: widthCalc}}>
                    {Array.from(Array(totalPages), (item, index) =>{
                        return (
                            <button className="buttonPag" value={index} onClick={e=>setCurrentPage(Number(e.target.value))}>{index+1}</button>
                        )
                    })}
                </C.ButtonMain>
                <C.SideButton onClick={handleRight}>
                    <img src="https://img.icons8.com/color/18/ffffff/long-arrow-right.png"/>
                </C.SideButton>
            </C.ButtonArea>
            
        </C.Container>
    )
}
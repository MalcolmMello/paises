import * as C from './styles'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CountriesAPI from '../../helpers/CountriesAPI'
import { Container } from '../../components/Container'
import { FlagArea } from '../../components/FlagArea'

export const FilterByRegion = () => {
    const { region } = useParams()


    const [allCountries, setAllCountries] = useState([])
    const [filter, setFilter] = useState('Region')
    const [search, setSearch] = useState('')

    //paginação
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)

    const [pageNumberList, setPageNumberList] = useState(5)
    const [MaxPageNumberList, setMaxPageNumberList] = useState(5)
    const [MinPageNumberList, setMinPageNumberList] = useState(0)

    const totalPages = Math.ceil(allCountries.length / itemsPerPage)
    const startIndex = currentPage*itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    const currentItems = allCountries.slice(startIndex, endIndex)


    const getCountriesRegion = async () => {
        let json = await CountriesAPI.getCountriesRegion(region)
        if(json !== '') {
            setAllCountries(json)            
            setSearch(region)
          } else {
            alert('resultado não encontrado')
          }
    }

    useEffect(()=>{
        getCountriesRegion()
    }, [region])

    useEffect(()=>{
        setSearch(region)
    }, [region])

    const getCountries = async () => {
        if(filter === 'Region') {
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
        if(filter === 'Language') {
            let json = await CountriesAPI.getCountriesLang(search)
    
            if(json !== '') {
                setAllCountries(json)
              } else {
                alert('resultado não encontrado')
              }
        } 
        if(filter === 'Country') {
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
        if(currentPage+1 < totalPages) {
            setCurrentPage(currentPage + 1)
            if(currentPage+1 > MaxPageNumberList-1) {
                setMaxPageNumberList(MaxPageNumberList + pageNumberList)
                setMinPageNumberList(MinPageNumberList + pageNumberList)
            }
        }     
    }

    const handleLeft = () => {
        if(currentPage !== 0) {
            setCurrentPage(currentPage - 1)
            if(currentPage - 1 < MinPageNumberList) {
                setMaxPageNumberList(MaxPageNumberList - pageNumberList)
                setMinPageNumberList(MinPageNumberList - pageNumberList)
            }
            
        }
    }
    
    return (
        <Container>
            <C.TopArea>
                <C.SelectArea>
                    <C.Filter>
                        Filter by:
                    </C.Filter>
                    <C.Select placeholder="Escolha sua opção" value={filter} onChange={e=>setFilter(e.target.value)}>
                        <option className="options">Region</option>
                        <option className="options">Capital</option>
                        <option className="options">Language</option>
                        <option className="options">Country</option>
                    </C.Select>
                </C.SelectArea>
                {filter !== '' &&
                    <C.SearchInput>
                        <C.Filter>
                            {filter}
                        </C.Filter>
                        {filter === 'Region' &&
                            <C.Select value={search} onChange={e=>setSearch(e.target.value)}>
                                <option className="options"></option>
                                <option className="options">Africa</option>
                                <option className="options">Americas</option>
                                <option className="options">Asia</option>
                                <option className="options">Europe</option>
                                <option className="options" >Oceania</option>
                            </C.Select>
                        } 
                        {filter !== 'Region' &&
                            <C.Input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
                        }
                    </C.SearchInput>
                }

                <C.Button onClick={getCountries}>
                    Search
                </C.Button>
            </C.TopArea>
            <FlagArea>
                    {currentItems.length > 0 &&
                        currentItems.map((item, index) => {
                            const { id, flags, name } = item
                            
                            return (
                                    <Link to={`/country/${name.common}`}>
                                        <article key={id}>
                                            <C.Flag className='flags' src={flags.png}/>
                                        </article>
                                    </Link> 
                            )
                        })
                    }
            </FlagArea>
            <C.ButtonArea>
                <C.SideButton onClick={handleLeft}>
                    <img src="https://img.icons8.com/color/18/ffffff/long-arrow-left.png"/>
                </C.SideButton>
                <C.ButtonMain>
                {Array.from(Array(totalPages), (item, index) =>{
                        if(index+1 < MaxPageNumberList+1 && index+1 > MinPageNumberList) {
                            return (
                                <button key={index} className={currentPage == index ? "buttonPag active" : "buttonPag"} value={index} onClick={e=>setCurrentPage(Number(e.target.value))}>{index+1}</button>
                            )
                        }
                    })}
                </C.ButtonMain>
                <C.SideButton onClick={handleRight}>
                    <img src="https://img.icons8.com/color/18/ffffff/long-arrow-right.png"/>
                </C.SideButton>
            </C.ButtonArea>
        </Container>
    )
} 
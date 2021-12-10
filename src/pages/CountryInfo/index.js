import * as C from './styles'
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import CountriesAPI from "../../helpers/CountriesAPI"
import { Container } from "../../components/Container"
import { FlagArea } from '../../components/FlagArea'

export const CountryInfo = () => {
    const { name } = useParams()

    const [filteredCountry, setFilteredCountry] = useState([])

    const [bordersItem, setBordersItem] = useState([])

    const [filteredBorder, setFilteredBolder] = useState([])

    const [regionCountry, setRegionCountry] = useState([])

    //paginação
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const [pageNumberList, setPageNumberList] = useState(5)
    const [MaxPageNumberList, setMaxPageNumberList] = useState(5)
    const [MinPageNumberList, setMinPageNumberList] = useState(0)

    const totalPages = Math.ceil(filteredBorder.length / itemsPerPage)
    const startIndex = currentPage*itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    const currentItems = filteredBorder.slice(startIndex, endIndex)

    const getCountry = async () => {
        let json = await CountriesAPI.getCountriesName(name)
        if(json !== '') {
            setFilteredCountry(json)
          } else {
            alert('resultado não encontrado')
          }
    }

    const getBorders = async (bds) => {
        let json = await CountriesAPI.getCountriesCode(bds)
        if(json !== '') {
            setFilteredBolder(json)
            console.log(filteredBorder)
        } else {
            alert('resultado não encontrado')
        }
        
    }

    useEffect(()=>{
        if(name !== '') {
            getCountry()
        }
    }, [name])

    useEffect(()=>{
        filteredCountry.map((item)=>{
            const { borders } = item;
            if(borders) {
                const url = borders.join(',')
                getBorders(url)
            }
        })
    }, [filteredCountry])

    useEffect(()=>{
        filteredCountry.map((item)=>{
            const { region } = item;
            if(region) {
                setRegionCountry(region)
            }
        })
    }, [filteredCountry])

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
            {filteredCountry &&
                filteredCountry.map((item, index)=>{
                    const {flags, name, capital, population, region, subregion, languages} = item

                    return(
                        <>
                            <C.InfoArea key={index}>
                                <C.Flag>
                                    <img src={flags.png}/>
                                </C.Flag>
                                <C.InfoData>
                                    <C.DataArea>
                                        <p className="title">Name:</p>
                                        <p>{name.common}</p>
                                    </C.DataArea>
                                    <C.DataArea>
                                        <p className="title">Capital:</p>
                                        <p>{capital[0]}</p>
                                    </C.DataArea>
                                    <C.DataArea>
                                        <p className="title">Population:</p>
                                        <p>{population}</p>
                                    </C.DataArea>
                                    <C.DataArea>
                                        <p className="title">Region:</p>
                                        <Link to={`/initialPage/${region}`}>
                                            <p>{region}</p>
                                        </Link>
                                    </C.DataArea>
                                    <C.DataArea>
                                        <p className="title">Subregion:</p>
                                        <p>{subregion}</p>
                                    </C.DataArea>
                                    <C.DataArea>
                                        <p className="title">Languages:</p>
                                        {Object.values(languages).map((item, index)=>{
                                            return (
                                                <p key={index}>{item}</p>
                                            )
                                        })}
                                    </C.DataArea>
                                </C.InfoData>
                            </C.InfoArea>
                        </>
                    )
                }
                )
            }
            
            {filteredBorder.length > 0 &&
                <p className='neighborTitle'>Borders:</p>
            }
            <FlagArea>
                    {currentItems.length > 0 &&
                        currentItems.map((item, index) => {
                            const { id, flags, name } = item
                            
                            return (
                                    <Link to={`/country/${name.common}`}>
                                        <article key={id}>
                                            <C.FlagBorder className='flags' src={flags.png}/>
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
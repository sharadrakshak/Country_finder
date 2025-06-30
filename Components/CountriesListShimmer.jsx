 
import './CountriesListShimmer.css'
export default function CountriesListShimmer() {
 let a= Array.from({length:10}).map((e,i)=>{
    return <div key={i} className='country-card shimmercard'></div>
  })
  
  return (
    <div className='countries-container'> 
    {a}
    </div>
  )
}  
import RaceVolt from '../assets/RaceVolt.png'

function Home () {
    return(
        <div className="">
            <div className="fundo">
                <img src={RaceVolt} alt="Imagem de fundo-RaceVolt" />
                    <h1>RACEVOLT</h1>
                    <h4>A combinação entre inovação elétrica, competições, e a diversão de trabalhar com motores e Arduino.</h4>

                    <button>VEJA MAIS</button>
            </div>
        </div> 
    )
}

export default Home
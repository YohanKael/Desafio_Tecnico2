import './Tables.css';

const Tables = (props) => {
  console.log(props.rightData)
  return (
    <>
      <div>
        <div className='Tables'></div>
        <LeftCard data={props.leftData}></LeftCard>
        <RightCard data={props.rightData}></RightCard> 
      </div>
    </>
  )
}

const LeftCard = ({data}) => {
  return (
  <div className='orangeTable'>
  <div className='leftTable'>
    <div className='leftTitle'>Desempenho e Carreira</div>
    <div className='leftWrapper'>
      <div className="table-row"><div className='leftText negrito'>Box: </div><div className='leftText italic'>{data.box}</div></div>
      <div className="table-row"><div className='leftText negrito'>Sucessor: </div><div className='leftText italic'>{data.sucessor ? "Sim" : "Não"}</div></div>
      <div className="table-row"><div className='leftText negrito'>Talento: </div><div className='leftText italic'>{data.talento ? "Sim" : "Não"}</div></div>
      <div className="table-row"><div className='leftText negrito'>Área: </div><div className='leftText italic'>{data.diretoria + " > " + data.area + " > " + data.subArea}</div></div>
      <div className="table-row"><div className='leftText negrito'>{"Gestor(a) imediato(a)"}: </div><div className='leftText italic'>{data.gestorImediato}</div></div>
      <div className="table-row"><div className='leftText negrito'>Posição: </div><div className='leftText italic'>{data.posicao}</div></div>
      <div className="table-row"><div className='leftText negrito'>Tempo no Cargo: </div><div className='leftText italic'>{data.tempoNoCargo}</div></div>
      <div className="table-row"><div className='leftText negrito'>Tempo na Área: </div><div className='leftText italic'>{data.tempoNaArea}</div></div>
      <div className="table-row"><div className='leftText negrito'>Elegibilidade para promoção: </div><div className='leftText italic'>{data.elegibilidadePromocao ? "Elegível" : "Não elegível"}</div></div>
    </div>
    <div className='bottomButtons'>
      <button className='leftButtons'>Desafios</button>
    </div>
  </div>  
</div>
 
  )
}

const RightCard = ({data}) => {
  return(
    <div className='greenTable'>
          <div className='rightTable'>
            <div className='rightTitle'>Remuneração</div>
            <div className='rightWrapper'>
              <div className="table-row"><div className='rightText negrito'>Salário: </div><div className='rightText italic'>R$ {data.salario}</div></div>
              <div className="table-row"><div className='rightText negrito'>Remuneração Total: </div><div className='rightText italic'>R$ {data.remuneracaoTotal}</div></div>
              <div className="table-row"><div className='rightText negrito'>GF: </div><div className='rightText italic'>{data.gf}</div></div>
              <div className="table-row"><div className='rightText negrito'>NV: </div><div className='rightText italic'>{data.nv}</div></div>
              <div className="table-row"><div className='rightText negrito'>PIR: </div><div className='rightText italic'>{data.pir}</div></div>
              <div className="table-row"><div className='rightText negrito'>Tempo sem Aumento: </div><div className='rightText italic'>{data.tempoSemAumento} meses</div></div>
              <div className="table-row"><div className='rightText negrito'>% último aumento: </div><div className='rightText italic'>{data.percentualUltimoAumento*100} %</div></div>
              <div className="table-row"><div className='rightText negrito'>{"Premio (3meses):"} </div><div className='rightText italic'>{!data.premio ? "Não tem" : "R$ " + data.premio}</div></div>
              <div className="table-row"><div className='rightText negrito'>{"Bônus / PLR (último):"} </div><div className='rightText italic'>{!data.bonusPlr ? "Não tem" : "R$ " + data.bonusPlr}</div></div>
              <div className="table-row"><div className='rightText negrito'>{"Adicionais (12 meses)"} </div><div className='rightText italic'>R$ {data.adicionais}</div></div>
            </div>
          </div>
          <div className='bottomButtons'>
            <button className='rightButtons'>Pares</button>
          </div>
        </div>
  )
}

export default Tables
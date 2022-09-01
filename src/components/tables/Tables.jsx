import './Tables.css';

const Tables = (props) => {
  return (
    <>
      <div className='Tables'>
        <LeftCard data={props.leftData}></LeftCard>
        <RightCard data={props.rightData}></RightCard>
      </div>
    </>
  )
}

const LeftCard = ({ data }) => {
  return (
    <div className='orangeTable'>
      <div className='leftTable'>
        <div className='leftTitle'>Desempenho e Carreira</div>
        <div className='leftWrapper'>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Box: </div><div className='leftText italic'>{data.box}</div>!!</div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Sucessor: </div><div className='leftText italic'>{data.sucessor ? "Sim" : "Não"}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Talento: </div><div className='leftText italic'>{data.talento ? "Sim" : "Não"}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Área: </div><div className='leftText italic'>{data.diretoria + " > " + data.area + " > " + data.subArea}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>{"Gestor(a) imediato(a)"}: </div><div className='leftText italic'>{data.gestorImediato}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Posição: </div><div className='leftText italic'>{data.posicao}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Tempo no Cargo: </div><div className='leftText italic'>{data.tempoNoCargo}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Tempo na Área: </div><div className='leftText italic'>{data.tempoNaArea}</div></div>
          <div className="tableLeft-row"><div className='leftText negrito marginLeft'>Elegibilidade para promoção: </div><div className='leftText italic'>{data.elegibilidadePromocao ? "Elegível" : "Não elegível"}</div></div>
        </div>
        <div className='bottomButtons'>
          <button className='leftButtons'>Desafios</button>
          <button className='leftButtons'>Metas</button>
          <button className='leftButtons'>Feedbacks e Fortalezas</button>
        </div>
      </div>
    </div>

  )
}

const RightCard = ({ data }) => {
  return (
    <div className='greenTable'>
      <div className='rightTable'>
        <div className='rightTitle'>Remuneração</div>
        <div className='rightWrapper'>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>Salário: </div><div className='rightText italic'>{data.salario}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>Remuneração Total: </div><div className='rightText italic'>R$ {data.remuneracaoTotal}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>GF: </div><div className='rightText italic'>{data.gf}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>NV: </div><div className='rightText italic'>{data.nv}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>PIR: </div><div className='rightText italic'>{data.pir}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>Tempo sem Aumento: </div><div className='rightText italic'>{data.tempoSemAumento} meses</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>% último aumento: </div><div className='rightText italic'>{data.percentualUltimoAumento * 100} %</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>{"Premio (3meses):"} </div><div className='rightText italic'>{!data.premio ? "Não tem" : "R$ " + data.premio}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>{"Bônus / PLR (último):"} </div><div className='rightText italic'>{!data.bonusPlr ? "Não tem" : "R$ " + data.bonusPlr}</div></div>
          <div className="tableRight-row"><div className='rightText negrito marginLeft'>{"Adicionais (12 meses):"} </div><div className='rightText italic'>R$ {data.adicionais}</div></div>
        </div>
      </div>
      <div className='bottomButtons'>
        <button className='rightButtons'>Pares</button>
      </div>
    </div>
  )
}

export default Tables
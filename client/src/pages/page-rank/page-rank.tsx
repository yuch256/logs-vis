import React, {useState} from 'react'
import c from 'classnames'
import {$get} from '@axios'
import Loading from '@c/loading'
import BubbleChart from '@diagram/bubble-chart'
import BarChart from '@diagram/bar-chart'
import s from './page-rank.module.styl'

interface Data {
  // nodes: Node[],
  // edges: Edge[],
}

const PageRank: React.FC = () => {
  const [data, setData] = useState<any>({
    nodes: [],
    edges: [],
  })
  const [loading, setLoading] = useState(false)

  return <div className="container wh100p">
    <div className="content wh100p pr">
      <Loading loading={loading}>
        <>
          <BubbleChart data={null} className={c(s.bubble)} />
          <BarChart data={null} />
        </>
      </Loading>
    </div>
  </div>
}

export default PageRank

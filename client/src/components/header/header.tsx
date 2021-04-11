import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Logo from './logo.png'
import './header.styl'

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <Link to="/" className="app-title">
        <div className="app-logo-box">
          <img src={Logo} alt="logo" className="wh100p" />
        </div>
        <span>网络安全数据可视化系统</span>
      </Link>
      <ul className="app-menu">
        <NavBar />
      </ul>
    </header>
  )
}

interface NavList {
  link: string,
  name: string,
}

const NavBar: React.FC = () => {
  const arr: NavList[] = [
    {link: '/network', name: '网络拓扑'},
    {link: '/page-rank', name: 'PageRank'},
    {link: '03', name: '京都苑'},
    {link: '04', name: '曙光花园'},
    {link: '05', name: '兴和公寓'},
  ]

  return <>
    {arr.map((item: NavList) => {
      return (
        <li className="app-menu-item" key={item.name}>
          <NavLink to={item.link} activeClassName="app-menu-active">
            {item.name}
          </NavLink>
        </li>
      )
    })}
  </>
}

export default Header

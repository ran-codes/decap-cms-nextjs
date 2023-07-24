import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default class Home extends Component {
  render() {
    let { title, stats } = attributes
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <AcUnitIcon />
        <AcUnitIcon />
        <AcUnitIcon />
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {stats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
 
        </article>
      </>
    )
  }
}
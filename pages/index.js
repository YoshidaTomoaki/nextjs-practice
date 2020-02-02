import React from 'react' 
import Link from 'next/link'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Index = props =>{

  return (
    <Layout>
      <ul>
        {props.shows.map( show => (
          <li key={show.id}>
            <Link href={`/p/[id]`}i as={`/p/${show.id}`}>
            <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
 ) 
};

Index.getInitialProps = async function() {

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`show data fetchd. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  } 

}

export default Index

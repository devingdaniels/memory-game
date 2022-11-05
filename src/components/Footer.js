import React from 'react'

function Footer () {
    let date = new Date().getFullYear()
  return (
    <footer>
       <p>Created &copy;<i> {date}</i><cite> <a href="https://github.com/devingdaniels" rel="noopener noreferrer" target='_blank'>Devin Daniels</a></cite></p>
      </footer>
  )
}

export default Footer

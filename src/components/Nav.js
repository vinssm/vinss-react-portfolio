import React, { useEffect }  from 'react';

function Nav(props) {
    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];

    const {
      currentPage,
      setCurrentPage
    } = props;
  
    useEffect(() => {
      document.title = `Vinay Vallabhaneni | ${currentPage}`
    })

    return (
      <header>
          <h1>
                <a data-testid="link" href="/">
                <span role="img" aria-label=""> 🏃 </span> Vinay Vallabhaneni 🏃
                </a>              
            </h1>
          <nav>
              <ul>
                  {tabs.map(tab => (

                      <li key={tab}>
                          <a
                              href={'#' + tab.toLowerCase()}
                              onClick={() => props.setCurrentPage(tab)}
                              className={
                                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                              }
                          >
                              {tab}
                          </a>
                      </li>
                  ))}

              </ul>
          </nav>
      </header>
  );
}

export default Nav;
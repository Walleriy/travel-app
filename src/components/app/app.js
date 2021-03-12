import React, { useState } from 'react';
import Header from "../header";
import Footer from "../footer";
import './app.scss'


const App = () => {

    const [page, setPage] = useState('main');


    const Country = ({id, onChoosePage}) => {
        return(
            <div>
                Country with id: {id}
                <div onClick={() => onChoosePage('main')}>Press to go back to main</div>
            </div>
        )
    }

    const Main = ({onChoosePage}) => {
        return (
            <div>
                Countries
                <div onClick={() => onChoosePage(1)}>1</div>
                <div onClick={() => onChoosePage(2)}>2</div>
                <div onClick={() => onChoosePage(3)}>3</div>
            </div>
        )
    };

    let domPage;
    if (page === 'main') {
        domPage = <Main onChoosePage={setPage}/>
    } else { //page або 'main' або цифра
        domPage = <Country id={page} onChoosePage={setPage}/>
    }

    return (
        <React.Fragment>
            <Header />
            {domPage}
            <Footer />
        </React.Fragment>
    );
}

export default App;

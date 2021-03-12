import React, { useState } from 'react';
import Header from "../header";
import Footer from "../footer";
import './app.scss'
import SearchPanel from "../search/search";


const App = () => {

    const [page, setPage] = useState('main');

    const [term, setTerm] = useState('')

    const SearchCountry = (term) => {
        setTerm(term);
        let res = search(items, term);
        console.log(`Фраза: ${term} Слова:  ${res}`);
    }

    let items = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem commodi culpa deleniti ea, eligendi ipsam maiores molestias nam nemo sunt vero. Ab ad adipisci alias aliquam aperiam aspernatur corporis deleniti dicta dolor eaque harum iste itaque iusto, modi molestias nesciunt nobis perferendis quaerat quibusdam reprehenderit soluta tempore ullam unde, voluptate voluptatum. Aliquid, debitis deserunt dicta distinctio error expedita facere, inventore itaque iure laudantium, nemo neque optio porro ratione reiciendis repellat sit unde. A commodi consequatur deserunt eligendi eum, eveniet, expedita illum itaque iure minus nam, nemo omnis pariatur praesentium provident ratione voluptatem. Accusantium eius iure neque reiciendis suscipit vitae?'.split(' ')

    const search = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

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
            <SearchPanel onSearchInput={SearchCountry}/>
            {domPage}
            <Footer />
        </React.Fragment>
    );
}

export default App;

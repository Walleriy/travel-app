import React, { useState } from 'react';
import Header from "../header";
import Footer from "../footer";
import './app.scss'
import SearchPanel from "../search/search";
import Country from "../../pages/country";
import Main from "../../pages/main";

const App = () => {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/1000/600/',
            originalTitle: 'Title One',
            description: 'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            originalTitle: 'Title Two',
            description: 'Description Tho Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            originalTitle: 'Title Three',
            description: 'Description Three Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
    ];


    const [page, setPage] = useState(3);

    const [, setTerm] = useState('')

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

    let domPage;
    if (page === 'main') {
        domPage = <Main onChoosePage={setPage}/>
    } else { //page або 'main' або цифра
        domPage = <Country id={page} onChoosePage={setPage} images={images} />
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

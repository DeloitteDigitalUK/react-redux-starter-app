import React from 'react';

import Repositories from '../../containers/RepositoriesContainer/';
import Search from '../../containers/SearchContainer/';

export const Home = () => (
    <div className="row">
        <div className="col-xs-12">
            <Search />
            <Repositories />
        </div>
    </div>
);

export default Home;

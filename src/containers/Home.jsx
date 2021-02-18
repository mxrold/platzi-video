import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';


const Home = ({ myList, trends, originals, searchVideos }) => {
    return (
        <>
            <Search />
            
            {
                searchVideos.length > 0 &&
                (
                    <Categories title="Resultados de la busqueda">
                        <Carousel>
                            {searchVideos.map(item => 
                                <CarouselItem
                                    key={item.id}
                                    {...item}
                                />
                            )}
                        </Carousel>
                    </Categories>
                )
            }

            {myList.length > 0 && 
                <Categories title="Mi Lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item}
                                isList
                            />
                            ) 
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        ) 
                    }
                </Carousel>
            </Categories>
        </>
    );
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        searchVideos: state.searchVideos
    };
}

// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);


// import './source';

import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import { NavBar } from './components/navBar';

const App = styled(({ className }) => {
    return (
        <div className={className}>
            <div className="app">
                <div className="app__nav">
                    <NavBar />
                </div>

                <div className="app__container">
                    <Spline scene="https://prod.spline.design/ADeub0q6Ekj9p9PJ/scene.splinecode" />
                </div>
            </div>
        </div>
    );
})`
    height: 100%;
    width: 100%;
    background: #e8b610;

    .app {
        &__container {
        }
    }
`;

export default App;

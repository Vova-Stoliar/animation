// import './source';

import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import { NavBar } from './components/NavBar';
import { Description } from './components/Description';
import React from 'react';

const Title = styled.p`
    color: var(--black, #1b1b1b);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const App = styled(({ className }) => {
    return (
        <div className={className}>
            <div className="app">
                <div className="app__wrapper">
                    <div className="app__nav">
                        <NavBar />
                    </div>

                    <div className="app__space" />
                    <div className="app__container">
                        <Spline
                            scene="https://prod.spline.design/GKlhbugkdOsPEjPK/scene.splinecode"
                            className="app__ball"
                        />
                    </div>
                </div>

                <div className="app__description-wrapper">
                    <div className="app__description">
                        <Title className="app__title">
                            Nothing is impossible for us. <br /> We'll bring your digital ideas to life!
                        </Title>
                        <div className="app__description-container">
                            <Description />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})`
    height: 100vh;
    width: 100%;

    .app {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #e8b610;

        &__ball {
            position: relative;

            @media (max-width: 1180px) {
                transform: scale(0.4);
                right: 350px;
            }

            @media (max-width: 768px) {
                transform: scale(0.4);
                right: 300px;
            }

            @media (max-width: 540px) {
                transform: scale(0.3);
                right: 230px;
            }

            @media (max-width: 375px) {
                transform: scale(0.27);
                right: 180px;
            }
        }

        &__container {
            position: absolute;
            top: -380px;
            left: -120px;
            right: 0;
            bottom: 0;

            overflow: hidden;

            @media (max-width: 1180px) {
                left: 0;
                top: -700px;
            }

            @media (max-width: 1024px) {
                top: -600px;
            }

            @media (max-width: 768px) {
                top: -650px;
            }

            @media (max-width: 540px) {
                top: -450px;
            }
        }

        &__wrapper {
            max-width: 1405px;
            margin: 0 auto;
            width: 100%;
            background-color: #e8b610;
        }

        &__space {
            min-height: 610px;

            @media (max-width: 1180px) {
                min-height: 500px;
            }
        }

        &__nav {
            position: relative;
            z-index: 1;
            padding: 30px;

            @media (max-width: 768px) {
                padding: 10px 20px;
            }
        }

        &__title {
            max-width: 1405px;
            margin: 0 auto;
            padding: 0 30px 60px;
            position: absolute;
            transform: translateY(-100%);

            @media (max-width: 768px) {
                padding: 0 20px 25px;
            }
        }

        &__description {
            max-width: 1405px;
            margin: 0 auto;
        }

        &__description-wrapper {
            position: relative;
            z-index: 1;
            background: #1b1b1b;
        }

        &__description-container {
            position: relative;
            z-index: 1;

            display: flex;
            height: 100%;
            width: 100%;
            align-items: end;
            justify-content: end;
            flex-direction: column;

            min-height: 375px;
            padding: 50px 30px 90px 30px;

            @media (max-width: 768px) {
                padding: 50px 20px 50px 20px;
                min-height: unset;
            }
        }
    }
`;

export default App;

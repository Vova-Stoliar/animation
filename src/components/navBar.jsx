import React from 'react';
import styled from 'styled-components';

export const NavBar = styled((props) => {
    const { className } = props;

    return (
        <div className={className}>
            <div className="nav">
                <div className="nav__container">
                    <div className="nav__logo" />

                    <nav className="nav__bar">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Bikes
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    BMX
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    BMX
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    BMX
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    BMX
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button className="nav__btn">Book a call</button>
                </div>
            </div>
        </div>
    );
})`
    .nav {
        &__container {
        }

        &__logo {
        }

        &__bar {
        }

        &__list {
        }

        &__item {
            color: var(--white, #fcfcfc);
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
        }

        &__link {
        }

        &__btn {
        }
    }
`;

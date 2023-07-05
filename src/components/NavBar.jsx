import React from 'react';
import styled from 'styled-components';
import { DownIcon, MenuIcon } from '../icons';

export const NavBar = styled((props) => {
    const { className } = props;

    return (
        <div className={className}>
            <div className="nav">
                <div className="nav__container">
                    <div className="nav__logo" />

                    <div className="nav__menu">
                        <MenuIcon />
                    </div>

                    <nav className="nav__bar">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    E-Commerce
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Healthcare
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Media
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link nav__link--with-popup">
                                    Services <DownIcon />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    About us
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Contact us
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link nav__link--with-popup">
                                    More <DownIcon />
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 30px;
        }

        &__logo {
            min-width: 82px;
            min-height: 22px;
            background-image: url('/Logo.svg');
            background-repeat: no-repeat;
            background-size: contain;
        }

        &__menu {
            display: none;

            @media (max-width: 1250px) {
                display: block;
            }
        }

        &__bar {
            @media (max-width: 1250px) {
                display: none;
            }
        }

        &__list {
            display: flex;
            gap: 35px;
        }

        &__item {
        }

        &__link {
            color: var(--white, #fcfcfc);
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            white-space: nowrap;

            &--with-popup {
                display: flex;
                gap: 5px;
                align-items: center;
            }
        }

        &__btn {
            display: flex;
            padding: 13px 38px;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            background: var(--white, #fcfcfc);

            color: var(--black, #1b1b1b);

            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            @media (max-width: 1250px) {
                display: none;
            }
        }
    }
`;

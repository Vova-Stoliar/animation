import React from 'react';
import styled from 'styled-components';

const PrimaryTitle = styled.p`
    color: var(--white, #fcfcfc);
    font-size: 70px;
    font-weight: 600;
    line-height: 140%;

    @media (max-width: 768px) {
        font-size: 42px;
    }
`;

const SecondaryTitle = styled.p`
    color: var(--white, #fcfcfc);

    font-size: 16px;
    font-weight: 400;
    line-height: 140%;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    width: 138px;
    height: 46px;

    border-radius: 100px;
    border: 1.5px solid var(--accent, #ffc612);
    background: #1b1b1b;

    color: var(--white, #fcfcfc);
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

    padding: 3px 20px;
`;

export const Description = styled((props) => {
    const { className } = props;

    return (
        <div className={className}>
            <div className="description">
                <div className="description__container">
                    <div className="description__title-group">
                        <PrimaryTitle className="description__title description__title--primary">
                            Digital solutions <br /> for e-business
                        </PrimaryTitle>
                    </div>

                    <div className="description__wrapper">
                        <SecondaryTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit, ex vel sagittis
                            consequat, neque nisl rutrum odio
                        </SecondaryTitle>

                        <Button className="description__talk-btn">
                            Let’s talk
                            <div className="description__talk-icon-container">
                                <div className="description__talk-icon"></div>{' '}
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
})`
    width: 100%;

    .description {
        height: 100%;

        &__container {
            display: flex;
            height: 100%;
            align-items: end;
            gap: 40px 20px;
            justify-content: space-between;
            flex-wrap: wrap;

            @media (max-width: 768px) {
                row-gap: 15px;
            }
        }

        &__title-group {
            position: relative;
        }

        &__wrapper {
            max-width: 520px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: end;
        }

        &__title {
            &--main {
                position: absolute;
            }
        }

        &__talk-icon-container {
            position: absolute;
            right: 3px;

            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            background-color: var(--accent, #ffc612);
            border-radius: 50%;
        }

        &__talk-btn {
            position: relative;
        }
        &__talk-icon {
            background-image: url('/talk.svg');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            width: 18px;
            height: 18px;
        }
    }
`;

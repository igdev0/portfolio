import styled from "styled-components";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const ToggleWrapper = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  label {
    color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
    margin-right: 1em;
    text-transform: capitalize;
    line-height: .5;
  }
`;

const SIZE_X = "4em";
const SIZE_Y = "2em";
const SPACING = ".2em";
export const SwitchUIWrapper = styled.div`
  .switch-ui {
    width: ${SIZE_X};
    height: ${SIZE_Y};
    border-radius: ${SIZE_X};
    position: relative;
    overflow: hidden;
    cursor: pointer;
    padding: ${SPACING};
    background-color: ${lighten(0.9,vars.colors.black)};
    display: inline-block;

    &--disabled {
      opacity: .7;
    }

    &-group {
      margin: .5em 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
    }

    &__label {
      margin: 0 1em;
      padding: 0;
    }

    &__input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      cursor: pointer;
    }

    &__bullet {
      width: 50%;
      height: 100%;
      cursor: pointer;
      background-color: ${vars.colors.white};
      transform: translateX(0%);
      border-radius: calc(${SIZE_X} + ${SPACING});
      pointer-events: none;
      transition: all ease-in-out .2s;
      background-color: ${vars.colors.yellow};
      
      &--active {
        transform: translateX(100%);
        background-color: ${vars.colors.black};
      }
    }
  }

  .cookie-popup {
    margin: 0;
    padding: 0;
    position: relative;

    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-options {
      display: flex;
      justify-content: center;

      button {
        margin: 0 .5em;
      }
    }
  }
`;

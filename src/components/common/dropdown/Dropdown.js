/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { spring } from "popmotion";
import { useFocused, useOnClickOutside } from "./CustomHooks";

/**
 *
 *
 * ******** this component is from codesandbox from user Etesam913 **************
 * https://codesandbox.io/s/elegant-dropdown-uj4gx
 *
 * ./CustomHooks is also from the same space
 *
 *
 */

const Dropdown = ({ items, label, placeholder, onChange, value }) => {
  const [clicked, setClicked] = useState(false);
  const [title, setTitle] = useState(value);
  const [titleHovered, setTitleHovered] = useState(false);
  const [curIndex, setCurIndex] = useState(-1);
  const dropdown = useRef(null);
  const dropdownContainer = useRef(null);
  const dropdownFocused = useFocused(dropdown);
  useOnClickOutside(dropdownContainer, () => {
    setClicked(false);
  });

  function handleTitleChange(value) {
    setTitle(value);
    if (onChange) onChange(value);
  }

  useEffect(() => {
    dropdownContainer.current.addEventListener("keypress", onKeypress);
    dropdownContainer.current.addEventListener("keydown", onKeydown);
    return () => {
      if (!dropdownContainer.current) return;
      dropdownContainer.current.removeEventListener("keypress", onKeypress);
      dropdownContainer.current.removeEventListener("keydown", onKeydown);
    };
  }, [curIndex, titleHovered, clicked, dropdownFocused]);

  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (dropdownFocused) {
        setClicked(!clicked);
      }
      if (clicked) {
        handleTitleChange(items[curIndex]);
        setClicked(false);
      } else if (titleHovered) {
        setClicked(!clicked);
      }
    }
  };

  const onKeydown = (e) => {
    if (!clicked) return;
    // Down arrowkey or tab is pressed
    if (e.keyCode === 40 || e.keyCode === 9) {
      e.preventDefault();
      if (curIndex + 1 < items.length) setCurIndex(curIndex + 1);
      else setCurIndex(0);
      // Up arrowkey is pressed
    } else if (e.keyCode === 38) {
      if (curIndex - 1 > -1) setCurIndex(curIndex - 1);
      else setCurIndex(items.length - 1);
    }
  };

  const options = items.map((item, index) => {
    return (
      <Option
        key={`option-${index + 1}`}
        animate={
          curIndex === index
            ? { backgroundColor: "#f0f0f0" }
            : { backgroundColor: "#ffffff" }
        }
        whileTap={{ backgroundColor: "#f0f0f0" }}
        onHoverStart={() => {
          setCurIndex(index);
        }}
        onHoverEnd={() => {
          setCurIndex(-1);
        }}
        noBorder={index === items.length - 1}
        onClick={() => {
          setClicked(false);
          handleTitleChange(item);
        }}
      >
        {item.name}
      </Option>
    );
  });

  return (
    <DropdownContainer ref={dropdownContainer}>
      <TitleContainer
        ref={dropdown}
        type="button"
        onClick={() => {
          setClicked(!clicked);
        }}
        onHoverStart={() => {
          setTitleHovered(true);
        }}
        onHoverEnd={() => {
          setTitleHovered(false);
        }}
      >
        <Title>
          {label && <Label>{label}</Label>}
          {title ? <Value>{title.name}</Value> : <Value>{placeholder}</Value>}
        </Title>
        <ArrowSvgContainer
          aria
          initial={{ backgroundColor: "#ffffff" }}
          whileHover={{ backgroundColor: "#f0f0f0" }}
        >
          <ArrowSvg
            animate={clicked ? { rotateZ: 180 } : { rotateZ: 0 }}
            viewBox="0 0 13 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.86543 0.373845C0.55918 0.680095 0.55918 1.17385 0.86543 1.4801L6.05918 6.67385C6.30293 6.9176 6.69668 6.9176 6.94043 6.67385L12.1342 1.4801C12.4404 1.17385 12.4404 0.680095 12.1342 0.373845C11.8279 0.067595 11.3342 0.067595 11.0279 0.373845L6.49668 4.89885L1.96543 0.367595C1.66543 0.0675955 1.16543 0.067595 0.86543 0.373845Z" />
          </ArrowSvg>
        </ArrowSvgContainer>
      </TitleContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <OptionsContainer
          initial={{ height: 0 }}
          animate={
            clicked
              ? {
                  height: "auto",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                }
              : {
                  height: 0,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  //   transition: { type: spring }
                }
          }
        >
          {options}
        </OptionsContainer>
      </div>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  /* width: 9.1875rem; */
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;
`;

const Title = styled.div`
  /* overflow-wrap: break-word; */
  text-align: left;
`;

const Label = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: #2f2f2f;
`;

const Value = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #9f9f9f;
`;

const TitleContainer = styled(motion.button)`
  width: 100%;
  min-height: 2.2rem;
  height: auto;
  padding: 16px 24px;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-size: 1rem;
  font-family: "Public Sans", sans-serif;
  cursor: pointer;
  &:hover {
    border-color: #9c9c9c;
  }
  &:focus-visible{
    border-color: #cd8b65;
    outline: none;
  }
`;

const ArrowSvgContainer = styled(motion.span)`
  padding: 0.25rem;
  border-radius: 5rem;
  width: 0.8125rem;
  height: 0.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowSvg = styled(motion.svg)`
  width: 0.8125rem;
  height: 0.4375rem;
  fill: #dfdfdf;
  background-color: transparent;
`;

const OptionsContainer = styled(motion.ul)`
  display: flex;
  /* width: 9.1875rem; */
  width: 100%;

  flex-direction: column;
  border-radius: 0.8125rem;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0 0 1.2rem 0;
  position: absolute;
  /* left: -4.59rem; */
  z-index: 2;
`;

const Option = styled(motion.li)`
  height: auto;
  background-color: #ffffff;
  padding: 0.5rem 0.5rem;
  border-bottom-width: ${(props) => (props.noBorder ? "0px" : "1px")};
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.noBorder ? "none" : "#E7E7E7")};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  overflow-wrap: break-word;
  font-family: "Public Sans", sans-serif;
  user-select: none;
  cursor: pointer;
`;

export default Dropdown;

"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Modal = () => {
  return (
    <div id={styles["modal"]}>
      <div
        className={`${styles["modal-content"]} flex flex-col justify-center items-center p-10`}
      >
        <h2 className={` ${styles["modal-content__title"]} text-4xl mb-8`}>
          Randomize questions?
        </h2>
        <div className="flex w-full">
          {/* <button
            className={`${styles["content__yes-button"]} content__button flex-1 mr-3 border rounded py-3`}
            type="button"
            onClick={() => randomizeQuestions(true)}
          >
            Yes
          </button>
          <button
            className={`${styles["content__no-button"]} content__button flex-1 border rounded py-3`}
            type="button"
            onClick={() => randomizeQuestions(false)}
          >
            No
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useEffect, useState } from 'react';
import { getTrends } from '../../service/API';
import { ListMovie } from '../../ListMovie/ListMovie';
import {  useLocation } from 'react-router-dom';
import s from "./HomePage.module.scss";

const HomePage = () => {
  const [array, setArray] = useState([]);
  
  const getMovie = () => {
    getTrends().then(rez => {
      setArray(rez);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
    <h1 className={s.title}>TOP 20 Movie Today</h1>
    <ol className={s.listItem}>
      {array.map(item => {
        return <ListMovie key={item.id} title={item.title} id={item.id} />;
      })}
    </ol>
    </>
  );
};
export default HomePage
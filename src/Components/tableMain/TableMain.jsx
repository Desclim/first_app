import React from 'react';
import styles from './TableMain.module.css'
const TableMain = ({resultForm}) => {
    for(let i=0;i<resultForm.length;i++){
        const item=resultForm[i]
        console.log(item.description)
    }
    return (
        <div>
            <table  className={styles.mainContainer}>
                <div className={styles.blockItem}>
                    <th className={styles.item}>Категория</th>
                    <th className={styles.item}>Количество</th>
                    <th className={styles.item}>Описание</th> </div>

                <div>{resultForm.map((item)=>(<div className={styles.blockItem}>
                    <td className={styles.item}>{item.category}</td>
                    <td className={styles.item}>{item.sum}</td>
                    <td className={styles.item}>{item.description}</td>
                </div>))}
                </div>
            </table>
        </div>
    );
};

export default TableMain;
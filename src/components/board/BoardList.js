import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

////////////////////////////////////////
import BoardContent from "./BoardContent";
import BoardWrite from './BoardWrite';

////////////////////////////////////////
const lg = console.log;



////////////////////////////////////////
const BoardList = () => {

    ////////////////////////////////////////
    let [boardList, setBoardList] = useState([]);   // 게시물
    let [isShowContent, setIsShowContent] = useState(false);   // 게시물 내용 show여부
    let [boardData, setBoardData] = useState('');   // 게시물



    ////////////////////////////////////////
    // 기능 모음
    useEffect(() => {
        // useEffect 는 페이지를 불러올 때 가장먼저 실행할것 지정하는 곳.
        axios.get('http://localhost:3030/board/list')
            .then((resultdata) => {
                lg('boardList 통신 ', resultdata.data);
                setBoardList(resultdata.data);

            })
            .catch(() => {
                lg('통신 실패');
                setBoardList('Fail');
            })
    }, []); // useeffect 의 두번째 인자값을 빈 배열로 주지 않으면 오류난다(서버에 무한 요청).




    ////////////////////////////////////////
    return (
        <>
            <div>
                <Link to='/boardWrite' >글쓰기</Link>
                <table border="solid 1px">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boardList.length > 0 ?

                                boardList.map((list, i) => {
                                    // 게시물 수가 0개 이상일 때 목록 출력
                                    return (
                                        <tr key={i} onClick={() => {
                                            setIsShowContent(!isShowContent);
                                            setBoardData(list);
                                        }}>
                                            <td>{list.BRD_IDX}</td>
                                            <td>{list.BRD_TITLE}</td>
                                            <td>{list.BRD_WRITER}</td>
                                            <td>{list.BRD_REGDATE}</td>
                                        </tr>
                                    );

                                })
                                :
                                // 게시물 없으면 아래 텍스트 출력
                                "게시물 없음"
                        }
                    </tbody>
                </table>

                {
                    isShowContent === true ? <BoardContent data={boardData} /> : ''
                }
            </div>
        </>
    );
}

export default BoardList;
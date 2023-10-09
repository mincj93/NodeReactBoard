import React, { useState, useEffect } from "react";

////////////////////////////////////////


////////////////////////////////////////
const lg = console.log;



////////////////////////////////////////
const BoardContent = (props) => {
    lg("dtaa ㅉ긱기", props.data)
    let detail = props.data;
    ////////////////////////////////////////


    ////////////////////////////////////////
    return (
        <div>
            <table border="solid 1px">
                <tr>
                    <td>번호</td>
                    <td>{props.data.BRD_IDX}</td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>{props.data.BRD_TITLE}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{props.data.BRD_CONTENT}</td>
                </tr>
                <tr>
                    <td>글쓴이</td>
                    <td>{props.data.BRD_WRITER}</td>
                </tr>
                <tr>
                    <td>작성일</td>
                    <td>{props.data.BRD_REGDATE}</td>
                </tr>
            </table>
        </div>

    );
}

export default BoardContent;
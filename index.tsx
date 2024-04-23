import React, {useState} from 'react';
import {Table, Input, Button} from 'antd';
const Demo1104 = () => {
    const [isEdited, setIsEdited] = useState(false);
    const columns = [
        {title: 'Mã số vinh viên', dataIndex: 'studentCode', key: 'studentCode'},
        {title: 'Họ và tên', dataIndex: 'studentName', key: 'studentName'},
        {title: 'Điểm kết thúc', dataIndex: 'result', key: 'result',
        render:(key:number,record:any, index:number) =>{
            return(
                <div>
                {!record.isEdited?
                    <a onClick = {() => {
                        let index = data.findIndex(x=>x.studentCode ==record.studentCode);
                        data[index].isEdited = true;
                        let previous = data.slice(0,index);
                        let after = data.slice(index + 1);
                        setSearchData([...previous, data[index], ...after])
                    }}>{record.result}</a>
                    :<input type = 'number' value ={record.result}
                        onChange = {(e) => {
                            let index = data.findIndex(x=>x.studentCode ==record.studentCode);
                            data[index].result = Number(e.currentTarget.value);
                            let previous = data.slice(0,index);
                            let after = data.slice(index + 1);
                            setSearchData([...previous, data[index], ...after])
                        }}
                        onKeyPress={(e) => {
                            if(e.key == 'Enter') {
                                let index = data.findIndex(x=>x.studentCode ==record.studentCode);
                                data[index].isEdited = false;
                                let previous = data.slice(0,index);
                                let after = data.slice(index + 1);
                                setSearchData([...previous, data[index], ...after])
                            }
                        }}
                />}
                </div>
            )
        }
        },
        {title: 'Quê quán', dataIndex: 'hometown', key: 'hometown'}
    ]
    const data = [
        {studentCode:'0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM', isEdited: false},
        {studentCode:'0909003', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Đồng Nai', isEdited: false},
        {studentCode:'0909002', studentName: 'Lý Uyển Nhi', result: 8.6, hometown: 'TPHCM', isEdited: false},
        {studentCode:'0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'Tiền Giang', isEdited: false},
        {studentCode:'0909005', studentName: 'Lê Văn Thắng', result: 8, hometown: 'Khánh Hòa', isEdited: false}

    ]
    const [searchData, setSearchData] = useState(data);
    const [searchText, setSearchText] = useState('');
    return(
        <div>
        <div>
            Tìm kiếm theo tên: &nbsp;<Input style = {{width :'20%'}} type = 'text' value ={searchText}
            onChange ={(e) => {
                setSearchData(data.filter(x=>x.studentName.toUpperCase().includes(e.currentTarget.value.toUpperCase().trim())))
                setSearchText(e.currentTarget.value);
            }}
            onKeyPress={(e)=>{
                if(e.key == 'Enter')
                    setSearchData(data.filter(x=>x.studentName.toUpperCase().includes(searchText.toUpperCase().trim())))
            }}
            />
            <input type = 'checkbox' />&nbsp;TPHCM&nbsp;
            <input type = 'checkbox' />&nbsp;Đồng Nai&nbsp;
            <input type = 'checkbox' />&nbsp;Khánh Hòa&nbsp;
            <input type = 'checkbox' />&nbsp;Tiền Giang&nbsp;
            <Button type = "primary"
            onClick ={() =>{
                let index = data.findIndex(x=>x.studentCode =='0909003');
                data[index].result = 9;
                let previous = data.slice(0,index);
                let after = data.slice(index + 1);
                setSearchData([...previous, data[index], ...after]);
            }}
            >Click me</Button> 

        </div>
            <Table columns ={columns} dataSource={searchData} />
        </div>
    )
}
export default Demo1104;
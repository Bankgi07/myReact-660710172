import React from "react";

function  JSXExample(){
    
    const greeting = <h1>Hello, React with JSX!!!</h1>   
    const name = 'bank';
    const age = 20;
    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'ธรรมธร',
        lastName: 'ลิขิตวิวัฒน์กุล',
        age:20,
        hobbies:['เล่นเกมส์','ดูหนัง','ฟังเพลง']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;
    

    return(
        <div className="jsx-examples">
            <h1>JSX Example</h1>

            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name}  อายุ{age} ปี </p>
                <p>นี่คือปี {currentYear} </p>
                <p>ชื่อจริง: {formatName(user)}</p>

            </section>

            <section>
                <h2>Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ classNameแทน class</p>
                </div>
                <button
                onclick={() => alert('Button Clicked!')}
                onMouseEnter={() => console.log('Mouse Entered!')}
                >
                    Hover me or Click Me!
                </button>

                <div style={{
                backgroundColor: '#E8F5E8',
                padding:'15',
                borderRadius: '8px',
                marginTop:'10px'
                }}>
                    <p style={{color: ' #2D4A2B', fontWeight:'bold' }}>
                        Inline Style ใช้ object
                    </p>

                </div>
            </section>            
        </div>
    )

}

export default JSXExample;
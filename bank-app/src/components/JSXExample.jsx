import React from "react";

function JSXExample() {
  const greeting = <h1>Hello, React with JSX!!!</h1>;
  const name = "bank";
  const age = 20;
  const currentYear = new Date().getFullYear();

  const user = {
    firstName: "ธรรมธร",
    lastName: "ลิขิตวิวัฒน์กุล",
    age: 20,
    hobbies: ["เล่นเกมส์", "ดูหนัง", "ฟังเพลง"],
  };

  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  };

  const isLoggedIn = true;
  const hasNotification = 3;

  return (
    
    <div className="jsx-examples"
     style={{ backgroundColor: '#fff8f0', minHeight: '100vh', padding: '20px' }}>

      <h1>JSX Example</h1>
      
      

      <section>
        <h2>การแสดงผลข้อมูล</h2>
        {greeting}
        <p>สวัสดีคุณ {name} อายุ{age} ปี</p>
        <p>นี่คือปี {currentYear}</p>
        <p>ชื่อจริง: {formatName(user)}</p>
      </section>

      <section>
        <h2>Attributes ใน JSX</h2>
        <div className="card">
          <p className="text-primary">ใช้ classNameแทน class</p>
        </div>
        <button
          onClick={() => alert("Button Clicked!")}
          onMouseEnter={() => console.log("Mouse Entered!")}
        >
          Hover me or Click Me!
        </button>

        <div
          style={{
            backgroundColor: "#E8F5E8",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          <p style={{ color: " #2D4A2B", fontWeight: "bold" }}>
            Inline Style ใช้ object
          </p>
        </div>

        <section>
          <h2>🔀 Conditional Rendering</h2>

          {/* ใช้ ternary operator */}
          <p>
            สถานะ: {isLoggedIn ? "✅ ล็อกอินแล้ว" : "❌ ยังไม่ได้ล็อกอิน"}
          </p>

          {/* ใช้ && operator */}
          {hasNotification > 0 && (
            <div className="notification">
              🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
            </div>
          )}

          {/* ใช้ if-else ผ่าน function */}
          {(() => {
            if (user.age >= 18) {
              return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
            } else {
              return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
            }
          })()}
        </section>

        <section>
          <h2>📋 การแสดงผล Lists</h2>
          <h3>งานอดิเรกของ {user.firstName}:</h3>
          <ul>
            {user.hobbies.map((hobby, index) => (
              <li key={index}>
                {index + 1}. {hobby}
              </li>
            ))}
          </ul>

          {/* ตัวอย่างที่ซับซ้อนขึ้น */}
          <div
            className="product-list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              padding: "20px",
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >
            {[
              {
                id: 1,
                name: "LABUBU SECRET",
                price: 48000,
                inStock: true,
                image: "https://down-th.img.susercontent.com/file/th-11134207-7r98x-lvhmunc3rdmi56_tn.webp",
                
            },
              {
                id: 2,
                name: "CRYBABY",
                price: 25000,
                inStock: true,
                image: "https://down-th.img.susercontent.com/file/cn-11134207-7ras8-m0l9yoczsjbb26",
              },
              {
                id: 3,
                name: "MOLLY",
                price: 99999,
                inStock: false,
                image: "https://static.thairath.co.th/media/Dtbezn3nNUxytg04ajY6iJr0NN4outr5SdJMWXuWExufZJ.jpg",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="product-item"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h4 style={{ margin: "10px 0", color: "#333" }}>
                  {product.name}
                </h4>
                <p
                  style={{
                    margin: "5px 0",
                    fontWeight: "bold",
                    color: "#2D4A2B",
                  }}
                >
                  ฿{product.price.toLocaleString()}
                </p>
                <span
                  className={product.inStock ? "in-stock" : "out-stock"}
                  style={{
                    color: product.inStock ? "#2e7d32" : "#c62828",
                    fontWeight: "bold",
                  }}
                >
                  {product.inStock ? "✅ มีสินค้า" : "❌ สินค้าหมด"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>🧩 React Fragment</h2>
          <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
          {/* Fragment แบบเต็ม */}
          <React.Fragment>
            <h3>หัวข้อ</h3>
            <p>เนื้อหา</p>
          </React.Fragment>

          {/* Fragment แบบย่อ */}
          <>
            <h3>หัวข้ออื่น</h3>
            <p>เนื้อหาอื่น</p>
          </>
        </section>

        <section>
          <h2>🎯 Event Handling ใน JSX</h2>
          <input
            type="text"
            placeholder="พิมพ์อะไรก็ได้..."
            onChange={(e) => console.log("พิมพ์:", e.target.value)}
          />

          <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
            <option value="">-- เลือกภาษา --</option>
            <option value="js">JavaScript</option>
            <option value="py">Python</option>
            <option value="java">Java</option>
            <option value="go">Go</option>
          </select>
        </section>

        <section>
          <h2>💬 Comments ใน JSX</h2>
          {/* นี่คือ comment ใน JSX */}
          <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
          {
            // นี่ก็เป็น comment เช่นกัน
            // แต่อยู่ใน JavaScript expression
          }
        </section>
        
        

      </section>
    </div>
  );
}

export default JSXExample;

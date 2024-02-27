import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function Itemcard() {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 170,
          margin: "20px",
          border: "1px solid #e8e8e8",
        }}
        cover={
          <img
        
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          title={<div style={{ margin: "7px 0" }}>Europe Street beat</div>}
          description={<div style={{ margin: "7px 0" }}>$100</div>} // Display price here
        />
      </Card>
    </>
  );
}

export default Itemcard;

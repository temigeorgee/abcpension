import { Tabs, Table } from "antd";
import React, { FC, useState } from "react";

const { TabPane } = Tabs;
type props = {
  data: Array<Record<string, any>>;
};
const TabDatable: FC<props> = ({ data }) => {
  return (
    <>
      <Tabs defaultActiveKey="0">
        {data &&
          data?.map((el, i) => {
            console.log(data, "dataaaa");
            return (
              <TabPane tab={el.title} key={i}>
                <Table
                  columns={el.columns}
                  dataSource={el.data}
                  pagination={false}
                />
              </TabPane>
            );
          })}
      </Tabs>
    </>
  );
};

export default TabDatable;

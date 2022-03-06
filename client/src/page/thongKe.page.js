// import React, { useEffect, useState } from "react";
// import { observer } from "mobx-react";
// import { PowerBIEmbed } from "powerbi-client-react";
// import { models } from "powerbi-client";
// import "powerbi-report-authoring";

// export const ThongKePage = observer(() => {
//   return (
//     <div className="powerbi-page">
//       <PowerBIEmbed
//         embedConfig={{
//           type: "report", // Supported types: report, dashboard, tile, visual and qna
//           id: "f3d8ac9a-373b-4831-8aa8-0a3b9b6cfbc0",
//           embedUrl:
//             "https://app.powerbi.com/reportEmbed?reportId=f3d8ac9a-373b-4831-8aa8-0a3b9b6cfbc0&groupId=4b41d740-815b-4305-97fc-3dc3ffcef0e0&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
//           accessToken:
//             "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzllY2ExNmItNjc3OS00ZTFhLTg4ZmQtMTVhNDViYTRmNWM2LyIsImlhdCI6MTY0NjQ3ODU3NCwibmJmIjoxNjQ2NDc4NTc0LCJleHAiOjE2NDY0ODM4NTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFRL1IrK3ljUFhIa1lmZVYreEwxdENSUzc0d0ZIdGpoZVRnTEdXN2Y5ckFpc0VCckpEV0R5QndZVm1MS3M2akhIIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiUGjhuqFtIiwiZ2l2ZW5fbmFtZSI6Ikhvw6BuZyBLaW0iLCJpcGFkZHIiOiIyNy43OC4xNi4xMDUiLCJuYW1lIjoiSG_DoG5nIEtpbSBQaOG6oW0iLCJvaWQiOiIzYTNkZDM5Ny1mNGIyLTQ5MDMtYWRhZi1hMWRkYmJlYmZkMGEiLCJwdWlkIjoiMTAwMzIwMDFFMTNCOEJGMyIsInJoIjoiMC5BWElBYTZIc3lYbG5HazZJX1JXa1c2VDF4Z2tBQUFBQUFBQUF3QUFBQUFBQUFBQnlBREUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiTHdQMHR2bGc3TnlHNlU0SERzSUhOYklMQUJtdHp6RENtM0p6c3EtR2p2WSIsInRpZCI6ImM5ZWNhMTZiLTY3NzktNGUxYS04OGZkLTE1YTQ1YmE0ZjVjNiIsInVuaXF1ZV9uYW1lIjoiZHRjMTg1NDgwMjAxMDExNkBpY3R1LmVkdS52biIsInVwbiI6ImR0YzE4NTQ4MDIwMTAxMTZAaWN0dS5lZHUudm4iLCJ1dGkiOiJFRXNLczZoTzJVaVdGa3RWQnV4UkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.wesms2_iEKOPnKW809UBs4x_R6EnbMp2vhliAePZtX1Unp5FMbLfPVlvrAPEZAeXUniwLDFQs22oLKyRJXmUtNxiSM97wUQGi6Kn5dsl98jWgAQAm6fsfG17_kw5e-8TXUjaOQvRXztYQCkg7wz4CFl-GnHpLEMYn3y2Feqcr2Wn9WIOpbtjkfW4hFubTOdaiwkAgncnByIZjJ-U8UFq-OYGiT5qQNorfOcGP6HDOsVtCeLm8CcOrmH-3DFxIalhWrneryVM2D12pWiXlDuTTEOmi6LSjArDMAWabIfZ272tw-uBMBs441EA94Z333LQ3MLZRxm69lfitfQXSfgdYA",
//           tokenType: models.TokenType.Aad,
//           settings: {
//             panes: {
//               filters: {
//                 expanded: false,
//                 visible: false,
//                 // visible: true,
//               },
//             },
//             background: models.BackgroundType.Transparent,
//           },
//         }}
//         eventHandlers={
//           new Map([
//             [
//               "loaded",
//               function () {
//                 console.log("Report loaded");
//               },
//             ],
//             [
//               "rendered",
//               function () {
//                 console.log("Report rendered");
//               },
//             ],
//             [
//               "error",
//               function (event) {
//                 console.log(event.detail);
//               },
//             ],
//           ])
//         }
//         cssClassName={"report-style-class"}
//         getEmbeddedComponent={(embeddedReport) => {
//           window.report = embeddedReport;
//         }}
//       />
//     </div>
//   );
// });

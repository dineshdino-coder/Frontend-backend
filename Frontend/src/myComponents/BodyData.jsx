import react from "react";
import { useState, useEffect } from "react";

const BodyData = (apiData) => {

  return (
    <div>
      {
        <div>
          <table>
            <thead>
              <tr>
                <th>SNO</th>
                <th>Album ID</th>
                <th style={{ cursor: 'pointer' }} onClick={apiData.sorting}>
                  Title
                </th>
                <th>
                  IMAGE
                </th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {
                apiData && apiData.apiData && apiData.apiData.length > 0 ? (
                  apiData.apiData.map((res, index) => (
                    <tr key={res.id}>
                      <td>{index + 1}</td>
                      <td>{res.albumId}</td>
                      <td>{res.title}</td>
                      <td>
                        <img src={res.thumbnailUrl} alt={res.title} />
                      </td>
                      <td>{res.url}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No data available</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};
export default BodyData;

import React from "react";

function AdminPetTable() {
  return (
    <>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>ภาพ</th>
              <th>Title</th>
              <th>ชนิดสัตว์</th>
              <th>สายพันธ์</th>
              <th>เพศ</th>
              <th>ร้าน</th>
              <th>{`อายุ(เดือน)`}</th>
              <th>ราคา</th>
              <th>แอคชั่น</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              {/* // Col-1 */}
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src={``} alt={`title`} />
                    </div>
                  </div>
                </div>
              </td>
              {/* // Col-2 */}
              <td>{`title`}</td>
              {/* // Col-3 */}
              <td>{`ชนิดสัตว์`}</td>
              {/* // Col-4 */}
              <td>{`สายพันธ์`}</td>
              {/* // Col-5 */}
              <td>{`เพศ`}</td>
              {/* // Col-6 */}
              <td>{`ร้าน`}</td>
              <td>{`อายุ(เดือน)`}</td>
              <td>{`ราคา`}</td>

              <th>
                <button class="btn btn-ghost btn-xs">แอคชั่น</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPetTable;

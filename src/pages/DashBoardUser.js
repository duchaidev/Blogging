import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import ActionDelete from "../components/icon/action/ActionDelete";
import ActionEdit from "../components/icon/action/ActionEdit";
import ActionView from "../components/icon/action/ActionView";
import Table from "../components/table/Table";

const DashBoardUser = () => {
  const { control } = useForm({
    mode: "onChange",
    defaultValues: "",
  });
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[#02E7F5] text-[26px] font-bold">
          Manage Your Posts
        </h2>
        <div className="w-[300px] mt-[-20px] flex flex-col items-end gap-6">
          <Button to="/add-new-post" type="button">
            Add New Post
          </Button>
          <Input control={control} kind="second" name="name"></Input>
        </div>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Info</th>
              <th>FullName</th>
              <th>Email Address</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td>Lorem</td>
              <td>
                <div className="flex items-center gap-x-3">
                  <img
                    src=""
                    alt=""
                    className="w-[66px] h-[55px] rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">LeDucHai</h3>
                    <time className="text-sm text-gray-500">02/11</time>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-gray-500">Leduchai</span>
              </td>
              <td>
                <span className="text-gray-500">leduchai2k3@gmail.com</span>
              </td>
              <td>
                <span className="text-gray-500">ADMIN</span>
              </td>
              <td>
                <div className="flex gap-2">
                  <ActionView
                    onClick={() => {
                      // navigate(`/${post.slug}`);
                    }}
                  ></ActionView>
                  <ActionEdit
                    onClick={() => {
                      // navigate(`/manage/update-post?id=${post?.id}`)
                    }}
                  ></ActionEdit>
                  <ActionDelete
                    onClick={() => {
                      // handleDelete(post.id);
                    }}
                  ></ActionDelete>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td>Lorem</td>
              <td>
                <div className="flex items-center gap-x-3">
                  <img
                    src=""
                    alt=""
                    className="w-[66px] h-[55px] rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">LeDucHai</h3>
                    <time className="text-sm text-gray-500">02/11</time>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-gray-500">Leduchai</span>
              </td>
              <td>
                <span className="text-gray-500">leduchai2k3@gmail.com</span>
              </td>
              <td>
                <span className="text-gray-500">ADMIN</span>
              </td>
              <td>
                <div className="flex gap-2">
                  <ActionView
                    onClick={() => {
                      // navigate(`/${post.slug}`);
                    }}
                  ></ActionView>
                  <ActionEdit
                    onClick={() => {
                      // navigate(`/manage/update-post?id=${post?.id}`)
                    }}
                  ></ActionEdit>
                  <ActionDelete
                    onClick={() => {
                      // handleDelete(post.id);
                    }}
                  ></ActionDelete>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td>Lorem</td>
              <td>
                <div className="flex items-center gap-x-3">
                  <img
                    src=""
                    alt=""
                    className="w-[66px] h-[55px] rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">LeDucHai</h3>
                    <time className="text-sm text-gray-500">02/11</time>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-gray-500">Leduchai</span>
              </td>
              <td>
                <span className="text-gray-500">leduchai2k3@gmail.com</span>
              </td>
              <td>
                <span className="text-gray-500">ADMIN</span>
              </td>
              <td>
                <div className="flex gap-2">
                  <ActionView
                    onClick={() => {
                      // navigate(`/${post.slug}`);
                    }}
                  ></ActionView>
                  <ActionEdit
                    onClick={() => {
                      // navigate(`/manage/update-post?id=${post?.id}`)
                    }}
                  ></ActionEdit>
                  <ActionDelete
                    onClick={() => {
                      // handleDelete(post.id);
                    }}
                  ></ActionDelete>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DashBoardUser;

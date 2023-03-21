import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import ActionDelete from "../components/icon/action/ActionDelete";
import ActionEdit from "../components/icon/action/ActionEdit";
import Table from "../components/table/Table";

const DashBoardCategory = () => {
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
      <div className="mt-[10px]">
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td>Lorem</td>
              <td>
                <span>Android Mobie</span>
              </td>
              <td>
                <span className="text-gray-500">Leduchai</span>
              </td>

              <td>
                <div className="flex gap-2">
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
                <span>Android Mobie</span>
              </td>
              <td>
                <span className="text-gray-500">Leduchai</span>
              </td>

              <td>
                <div className="flex gap-2">
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
                <span>Android Mobie</span>
              </td>

              <td>
                <span className="text-gray-500">leduchai</span>
              </td>
              <td>
                <div className="flex gap-2">
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

export default DashBoardCategory;

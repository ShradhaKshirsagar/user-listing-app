import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserDetail() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.data.find((user) => user.id === parseInt(id))
  );

  if (!user) return <div>User not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-700">
            <strong>Website:</strong> {user.website}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Company</h2>
          <p>{user.company.name}</p>
          <p className="text-gray-600">{user.company.catchPhrase}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Address</h2>
          <p>
            {user.address.suite}, {user.address.street}, {user.address.city}
          </p>
          <p>ZIP: {user.address.zipcode}</p>
        </div>
        <Link
          to="/"
          className="text-blue-500 underline mt-4 block hover:text-blue-700"
        >
          Back to User List
        </Link>
      </div>
    </div>
  );
}

export default UserDetail;

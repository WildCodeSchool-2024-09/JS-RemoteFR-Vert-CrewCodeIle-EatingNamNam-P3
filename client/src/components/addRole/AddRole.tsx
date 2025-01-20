const AddRole = () => {
  type RoleType = {
    label: string;
  };

  const newRole = {
    label: "",
  };

  const handleRoleSubmit = (newRole: RoleType) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/roles`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRole),
    }).then((response) => response.json());
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const label = formData.get("label") as string;

          handleRoleSubmit({
            label,
          });
        }}
      >
        <input type="text" name="label" defaultValue={newRole.label} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddRole;

export const style = {
  buttonDesign: (color: any) => {
    return {
      display: "flex",
      color: color,
      border: `1px solid ${color}`,
      height: "24px",
      padding: "12px 24px",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      gap: "10px",
      boxShadow: 'none'
    };
  },
};

// Formats unix date to locale time
const formatDate = (time: number | undefined) => {
  return typeof time === "number"
    ? new Date(time * 1000)?.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
};

export default formatDate;

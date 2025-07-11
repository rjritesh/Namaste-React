import useOnlineStatus from "../utils/useOnlineStatus"

const OnlineOffline = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="status-box">
        {onlineStatus ? "🟢" : "🔴"}
      </div>

    </>

  )
}

export default OnlineOffline
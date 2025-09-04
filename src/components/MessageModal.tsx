"use client";

import React, { useState } from "react";

interface MessageModalProps {
  onClose: () => void;
}

const MessageModal: React.FC = ()=>  {
  const [channels, setChannels] = useState({
    email: true,
    sms: true,
    whatsapp: true,
    app: true,
  });
  const [message, setMessage] = useState("");

  const toggleChannel = (channel: keyof typeof channels) => {
    setChannels((prev) => ({ ...prev, [channel]: !prev[channel] }));
  };

  const sendMessage = () => {
    const selectedChannels = Object.entries(channels)
      .filter(([_, val]) => val)
      .map(([key]) => key);

    console.log("Sending to:", selectedChannels);
    console.log("Message:", message);
    alert("Message sent!");
    onClose();
  };

  return(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h3 className="text-xl font-semibold mb-2">Send Message to All Coaches</h3>
        <p className="text-sm text-gray-600 mb-4">
          All communication channels are selected by default. Compose your message below.
        </p>

    <div className="flex items-center justify-between mb-2">
  <span className="font-medium">Communication Channels</span>
  <button
    className="px-3 py-1 rounded-md border bg-white-100 border-silver-400 text-sm"
    onClick={() => setChannels({ email: false, sms: false, whatsapp: false, app: false })}
  >
    Deselect All
  </button>
</div>

    <div className="flex flex-wrap gap-2 mb-4">
    <button
            className={`px-4 py-2 rounded-md border ${
              channels.email ? "bg-blue-100 border-blue-400" : "bg-gray-100 border-gray-300"
            }`}
            onClick={() => toggleChannel("email")}
          >
            Email
          </button>
          <button
            className={`px-4 py-2 rounded-md border ${
              channels.sms ? "bg-blue-100 border-blue-400" : "bg-gray-100 border-gray-300"
            }`}
            onClick={() => toggleChannel("sms")}
          >
            SMS
          </button>
          <button
            className={`px-4 py-2 rounded-md border ${
              channels.whatsapp ? "bg-blue-100 border-blue-400" : "bg-gray-100 border-gray-300"
            }`}
            onClick={() => toggleChannel("whatsapp")}
          >
            WhatsApp
          </button>
          <button
            className={`px-4 py-2 rounded-md border ${
              channels.app ? "bg-blue-100 border-blue-400" : "bg-gray-100 border-gray-300"
            }`}
            onClick={() => toggleChannel("app")}
          >
            App Notification
          </button>
        </div>

        <textarea
          className="w-full h-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex justify-between mt-4">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            onClick={sendMessage}
          >
            Send Message
          </button>

          <button
            className="bg-gray-200 px-4 py-2 rounded-md"
            onClick={() => alert("Cancelled")}
          >Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
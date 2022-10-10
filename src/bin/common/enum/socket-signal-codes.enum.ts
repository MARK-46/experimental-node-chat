export enum SocketSignalCodesEnum {
    // Server To Clients
    SIGNAL_KICK = 100,
    SIGNAL_CLIENT_ONLINE = 101,
    SIGNAL_CLIENT_OFFLINE = 102,
    SIGNAL_PROFILE = 103,
    SIGNAL_BANNED = 104,
    SIGNAL_CREATED_ROOM = 105,
    SIGNAL_CREATED_ROOM_MESSAGE = 106,
    SIGNAL_DELETED_ROOM = 107,
    SIGNAL_DELETED_ROOM_MESSAGE = 108,
    SIGNAL_TYPING_ROOM_MESSAGE = 109,

    // Clients to Server
    // For Emit
    CLIENT_SIGNAL_SET_MESSAGE_RECIPIENT_TYPE = 201,
    CLIENT_SIGNAL_TYPING_MESSAGE = 202,
}

const router = require('express').Router();
const cfx = require("cfx-api");

let checkKey = (key) => {
    if (key == "123456") return true;
    return false;
}

router.get('/players', async (req, res) => {
    let {
        serverID,
        key
    } = req.query;
    if (!serverID || !key) return res.status(400).json({
        error: "Missing serverID or key"
    });
    if (!checkKey(key)) return res.status(401).json({
        error: "Invalid key"
    });
    const server = await cfx.fetchServer(serverID);
    res.json(server.players);
});

router.get('/server', async (req, res) => {
    let {
        serverID,
        key
    } = req.query;
    if (!serverID || !key) return res.status(400).json({
        error: "Missing serverID or key"
    });
    if (!checkKey(key)) return res.status(401).json({
        error: "Invalid key"
    });
    const server = await cfx.fetchServer(serverID);
    res.json(server);
});

router.get('/owner', async (req, res) => {
    let {
        serverID,
        key
    } = req.query;
    if (!serverID || !key) return res.status(400).json({
        error: "Missing serverID or key"
    });
    if (!checkKey(key)) return res.status(401).json({
        error: "Invalid key"
    });
    const server = await cfx.fetchServer(serverID);
    res.json({
        name: server.data.ownerName,
        profile: server.data.ownerProfile,
        avatar: server.data.ownerAvatar,
        lastSeen: server.data.lastSeen,
        id: server.data.ownerID
    });
});

router.get('/resources', async (req, res) => {
    let {
        serverID,
        key
    } = req.query;

    if (!serverID || !key) return res.status(400).json({
        error: "Missing serverID or key"
    });

    if (!checkKey(key)) return res.status(401).json({
        error: "Invalid key"
    });

    const server = await cfx.fetchServer(serverID);
    res.json(server.resources);
});

router.get('/status', async (req, res) => {
    let {
        serverID,
        key
    } = req.query;

    if (!serverID || !key) return res.status(400).json({
        error: "Missing serverID or key"
    });

    if (!checkKey(key)) return res.status(401).json({
        error: "Invalid key"
    });

    try {
        const server = await cfx.fetchServer(serverID);
        res.json({
            status: true
        });
    } catch (e) {
        res.json({
            status: false
        });
    }
});

router.get('/map', async (req, res) => {
    let {
        serverID,
        key
    } = req.query;

    if (!serverID || !key) return res.status(400).json({
        error: "Missing serverID or key"
    });

    if (!checkKey(key)) return res.status(401).json({
        error: "Invalid key"
    });

    const server = await cfx.fetchServer(serverID);
    res.json({
        map: server.data.map || "Unknown"
    });
});

module.exports = router;
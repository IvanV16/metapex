"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenAmount = exports.loadTokenEntanglementProgream = exports.loadAuctionHouseProgram = exports.loadFairLaunchProgram = exports.loadCandyProgram = exports.loadWalletKey = exports.getTokenEntanglementEscrows = exports.getTokenEntanglement = exports.getAuctionHouseTradeState = exports.getAuctionHouseBuyerEscrow = exports.getAuctionHouseTreasuryAcct = exports.getAuctionHouseFeeAcct = exports.getAuctionHouseProgramAsSigner = exports.getAuctionHouse = exports.getEditionMarkPda = exports.getMasterEdition = exports.getMetadata = exports.getTreasury = exports.getParticipationToken = exports.getParticipationMint = exports.getAtaForMint = exports.getFairLaunchTicketSeqLookup = exports.getFairLaunchLotteryBitmap = exports.getFairLaunchTicket = exports.getFairLaunch = exports.getTokenMint = exports.getConfig = exports.getCandyMachineAddress = exports.getTokenWallet = exports.uuidFromConfigPubkey = exports.createConfig = exports.deserializeAccount = void 0;
var web3_js_1 = require("@solana/web3.js");
var constants_1 = require("./constants");
var anchor = __importStar(require("@project-serum/anchor"));
var fs_1 = __importDefault(require("fs"));
var instructions_1 = require("./instructions");
var anchor_1 = require("@project-serum/anchor");
var loglevel_1 = __importDefault(require("loglevel"));
var spl_token_1 = require("@solana/spl-token");
// TODO: expose in spl package
var deserializeAccount = function (data) {
    var accountInfo = spl_token_1.AccountLayout.decode(data);
    accountInfo.mint = new web3_js_1.PublicKey(accountInfo.mint);
    accountInfo.owner = new web3_js_1.PublicKey(accountInfo.owner);
    accountInfo.amount = spl_token_1.u64.fromBuffer(accountInfo.amount);
    if (accountInfo.delegateOption === 0) {
        accountInfo.delegate = null;
        accountInfo.delegatedAmount = new spl_token_1.u64(0);
    }
    else {
        accountInfo.delegate = new web3_js_1.PublicKey(accountInfo.delegate);
        accountInfo.delegatedAmount = spl_token_1.u64.fromBuffer(accountInfo.delegatedAmount);
    }
    accountInfo.isInitialized = accountInfo.state !== 0;
    accountInfo.isFrozen = accountInfo.state === 2;
    if (accountInfo.isNativeOption === 1) {
        accountInfo.rentExemptReserve = spl_token_1.u64.fromBuffer(accountInfo.isNative);
        accountInfo.isNative = true;
    }
    else {
        accountInfo.rentExemptReserve = null;
        accountInfo.isNative = false;
    }
    if (accountInfo.closeAuthorityOption === 0) {
        accountInfo.closeAuthority = null;
    }
    else {
        accountInfo.closeAuthority = new web3_js_1.PublicKey(accountInfo.closeAuthority);
    }
    return accountInfo;
};
exports.deserializeAccount = deserializeAccount;
var createConfig = function (anchorProgram, payerWallet, configData) {
    return __awaiter(this, void 0, void 0, function () {
        var configAccount, uuid, totalShare, _a, _b, _c;
        var _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    configAccount = web3_js_1.Keypair.generate();
                    uuid = uuidFromConfigPubkey(configAccount.publicKey);
                    if (!configData.creators || configData.creators.length === 0) {
                        throw new Error("Invalid config, there must be at least one creator.");
                    }
                    totalShare = (configData.creators || []).reduce(function (acc, curr) { return acc + curr.share; }, 0);
                    if (totalShare !== 100) {
                        throw new Error("Invalid config, creators shares must add up to 100");
                    }
                    _d = {
                        config: configAccount.publicKey,
                        uuid: uuid
                    };
                    _b = (_a = anchorProgram.rpc).initializeConfig;
                    _c = [__assign({ uuid: uuid }, configData)];
                    _e = {
                        accounts: {
                            config: configAccount.publicKey,
                            authority: payerWallet.publicKey,
                            payer: payerWallet.publicKey,
                            systemProgram: web3_js_1.SystemProgram.programId,
                            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                        },
                        signers: [payerWallet, configAccount]
                    };
                    return [4 /*yield*/, instructions_1.createConfigAccount(anchorProgram, configData, payerWallet.publicKey, configAccount.publicKey)];
                case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([(_e.instructions = [
                            _f.sent()
                        ],
                            _e)]))];
                case 2: return [2 /*return*/, (_d.txId = _f.sent(),
                        _d)];
            }
        });
    });
};
exports.createConfig = createConfig;
function uuidFromConfigPubkey(configAccount) {
    return configAccount.toBase58().slice(0, 6);
}
exports.uuidFromConfigPubkey = uuidFromConfigPubkey;
var getTokenWallet = function (wallet, mint) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([wallet.toBuffer(), constants_1.TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()], constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID)];
                case 1: return [2 /*return*/, (_a.sent())[0]];
            }
        });
    });
};
exports.getTokenWallet = getTokenWallet;
var getCandyMachineAddress = function (config, uuid) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from(constants_1.CANDY_MACHINE), config.toBuffer(), Buffer.from(uuid)], constants_1.CANDY_MACHINE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getCandyMachineAddress = getCandyMachineAddress;
var getConfig = function (authority, uuid) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from(constants_1.CANDY_MACHINE), authority.toBuffer(), Buffer.from(uuid)], constants_1.CANDY_MACHINE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getConfig = getConfig;
var getTokenMint = function (authority, uuid) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from('fair_launch'),
                    authority.toBuffer(),
                    Buffer.from('mint'),
                    Buffer.from(uuid),
                ], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getTokenMint = getTokenMint;
var getFairLaunch = function (tokenMint) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from('fair_launch'), tokenMint.toBuffer()], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getFairLaunch = getFairLaunch;
var getFairLaunchTicket = function (tokenMint, buyer) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from('fair_launch'), tokenMint.toBuffer(), buyer.toBuffer()], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getFairLaunchTicket = getFairLaunchTicket;
var getFairLaunchLotteryBitmap = function (tokenMint) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from('fair_launch'), tokenMint.toBuffer(), Buffer.from('lottery')], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getFairLaunchLotteryBitmap = getFairLaunchLotteryBitmap;
var getFairLaunchTicketSeqLookup = function (tokenMint, seq) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from('fair_launch'), tokenMint.toBuffer(), seq.toBuffer('le', 8)], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getFairLaunchTicketSeqLookup = getFairLaunchTicketSeqLookup;
var getAtaForMint = function (mint, buyer) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([buyer.toBuffer(), constants_1.TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()], constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAtaForMint = getAtaForMint;
var getParticipationMint = function (authority, uuid) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from('fair_launch'),
                    authority.toBuffer(),
                    Buffer.from('mint'),
                    Buffer.from(uuid),
                    Buffer.from('participation'),
                ], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getParticipationMint = getParticipationMint;
var getParticipationToken = function (authority, uuid) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from('fair_launch'),
                    authority.toBuffer(),
                    Buffer.from('mint'),
                    Buffer.from(uuid),
                    Buffer.from('participation'),
                    Buffer.from('account'),
                ], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getParticipationToken = getParticipationToken;
var getTreasury = function (tokenMint) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from('fair_launch'), tokenMint.toBuffer(), Buffer.from('treasury')], constants_1.FAIR_LAUNCH_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getTreasury = getTreasury;
var getMetadata = function (mint) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from('metadata'),
                    constants_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                    mint.toBuffer(),
                ], constants_1.TOKEN_METADATA_PROGRAM_ID)];
            case 1: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); };
exports.getMetadata = getMetadata;
var getMasterEdition = function (mint) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from('metadata'),
                    constants_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                    mint.toBuffer(),
                    Buffer.from('edition'),
                ], constants_1.TOKEN_METADATA_PROGRAM_ID)];
            case 1: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); };
exports.getMasterEdition = getMasterEdition;
var getEditionMarkPda = function (mint, edition) { return __awaiter(void 0, void 0, void 0, function () {
    var editionNumber;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                editionNumber = Math.floor(edition / 248);
                return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                        Buffer.from('metadata'),
                        constants_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                        mint.toBuffer(),
                        Buffer.from('edition'),
                        Buffer.from(editionNumber.toString()),
                    ], constants_1.TOKEN_METADATA_PROGRAM_ID)];
            case 1: return [2 /*return*/, (_a.sent())[0]];
        }
    });
}); };
exports.getEditionMarkPda = getEditionMarkPda;
var getAuctionHouse = function (creator, treasuryMint) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from(constants_1.AUCTION_HOUSE), creator.toBuffer(), treasuryMint.toBuffer()], constants_1.AUCTION_HOUSE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAuctionHouse = getAuctionHouse;
var getAuctionHouseProgramAsSigner = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from(constants_1.AUCTION_HOUSE), Buffer.from('signer')], constants_1.AUCTION_HOUSE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAuctionHouseProgramAsSigner = getAuctionHouseProgramAsSigner;
var getAuctionHouseFeeAcct = function (auctionHouse) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from(constants_1.AUCTION_HOUSE),
                    auctionHouse.toBuffer(),
                    Buffer.from(constants_1.FEE_PAYER),
                ], constants_1.AUCTION_HOUSE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAuctionHouseFeeAcct = getAuctionHouseFeeAcct;
var getAuctionHouseTreasuryAcct = function (auctionHouse) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from(constants_1.AUCTION_HOUSE),
                    auctionHouse.toBuffer(),
                    Buffer.from(constants_1.TREASURY),
                ], constants_1.AUCTION_HOUSE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAuctionHouseTreasuryAcct = getAuctionHouseTreasuryAcct;
var getAuctionHouseBuyerEscrow = function (auctionHouse, wallet) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from(constants_1.AUCTION_HOUSE), auctionHouse.toBuffer(), wallet.toBuffer()], constants_1.AUCTION_HOUSE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAuctionHouseBuyerEscrow = getAuctionHouseBuyerEscrow;
var getAuctionHouseTradeState = function (auctionHouse, wallet, tokenAccount, treasuryMint, tokenMint, tokenSize, buyPrice) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                    Buffer.from(constants_1.AUCTION_HOUSE),
                    wallet.toBuffer(),
                    auctionHouse.toBuffer(),
                    tokenAccount.toBuffer(),
                    treasuryMint.toBuffer(),
                    tokenMint.toBuffer(),
                    buyPrice.toBuffer('le', 8),
                    tokenSize.toBuffer('le', 8),
                ], constants_1.AUCTION_HOUSE_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getAuctionHouseTradeState = getAuctionHouseTradeState;
var getTokenEntanglement = function (mintA, mintB) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([Buffer.from(constants_1.TOKEN_ENTANGLER), mintA.toBuffer(), mintB.toBuffer()], constants_1.TOKEN_ENTANGLEMENT_PROGRAM_ID)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getTokenEntanglement = getTokenEntanglement;
var getTokenEntanglementEscrows = function (mintA, mintB) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [[]];
                return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                        Buffer.from(constants_1.TOKEN_ENTANGLER),
                        mintA.toBuffer(),
                        mintB.toBuffer(),
                        Buffer.from(constants_1.ESCROW),
                        Buffer.from(constants_1.A),
                    ], constants_1.TOKEN_ENTANGLEMENT_PROGRAM_ID)];
            case 1:
                _b = [__spreadArray.apply(void 0, _a.concat([__read.apply(void 0, [(_c.sent())])]))];
                return [4 /*yield*/, anchor.web3.PublicKey.findProgramAddress([
                        Buffer.from(constants_1.TOKEN_ENTANGLER),
                        mintA.toBuffer(),
                        mintB.toBuffer(),
                        Buffer.from(constants_1.ESCROW),
                        Buffer.from(constants_1.B),
                    ], constants_1.TOKEN_ENTANGLEMENT_PROGRAM_ID)];
            case 2: return [2 /*return*/, __spreadArray.apply(void 0, _b.concat([__read.apply(void 0, [(_c.sent())])]))];
        }
    });
}); };
exports.getTokenEntanglementEscrows = getTokenEntanglementEscrows;
function loadWalletKey(keypair) {
    if (!keypair || keypair == '') {
        throw new Error('Keypair is required!');
    }
    var loaded = web3_js_1.Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs_1.default.readFileSync(keypair).toString())));
    loglevel_1.default.info("wallet public key: " + loaded.publicKey);
    return loaded;
}
exports.loadWalletKey = loadWalletKey;
function loadCandyProgram(walletKeyPair, env, customRpcUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var solConnection, walletWrapper, provider, idl, program;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (customRpcUrl)
                        console.log('USING CUSTOM URL', customRpcUrl);
                    solConnection = new anchor.web3.Connection(
                    //@ts-ignore
                    customRpcUrl || anchor_1.web3.clusterApiUrl(env));
                    walletWrapper = new anchor.Wallet(walletKeyPair);
                    provider = new anchor.Provider(solConnection, walletWrapper, {
                        preflightCommitment: 'recent',
                    });
                    return [4 /*yield*/, anchor.Program.fetchIdl(constants_1.CANDY_MACHINE_PROGRAM_ID, provider)];
                case 1:
                    idl = _a.sent();
                    program = new anchor.Program(idl, constants_1.CANDY_MACHINE_PROGRAM_ID, provider);
                    loglevel_1.default.debug('program id from anchor', program.programId.toBase58());
                    return [2 /*return*/, program];
            }
        });
    });
}
exports.loadCandyProgram = loadCandyProgram;
function loadFairLaunchProgram(walletKeyPair, env, customRpcUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var solConnection, walletWrapper, provider, idl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (customRpcUrl)
                        console.log('USING CUSTOM URL', customRpcUrl);
                    solConnection = new anchor.web3.Connection(
                    //@ts-ignore
                    customRpcUrl || anchor_1.web3.clusterApiUrl(env));
                    walletWrapper = new anchor.Wallet(walletKeyPair);
                    provider = new anchor.Provider(solConnection, walletWrapper, {
                        preflightCommitment: 'recent',
                    });
                    return [4 /*yield*/, anchor.Program.fetchIdl(constants_1.FAIR_LAUNCH_PROGRAM_ID, provider)];
                case 1:
                    idl = _a.sent();
                    return [2 /*return*/, new anchor.Program(idl, constants_1.FAIR_LAUNCH_PROGRAM_ID, provider)];
            }
        });
    });
}
exports.loadFairLaunchProgram = loadFairLaunchProgram;
function loadAuctionHouseProgram(walletKeyPair, env, customRpcUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var solConnection, walletWrapper, provider, idl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (customRpcUrl)
                        console.log('USING CUSTOM URL', customRpcUrl);
                    solConnection = new anchor.web3.Connection(
                    //@ts-ignore
                    customRpcUrl || anchor_1.web3.clusterApiUrl(env));
                    walletWrapper = new anchor.Wallet(walletKeyPair);
                    provider = new anchor.Provider(solConnection, walletWrapper, {
                        preflightCommitment: 'recent',
                    });
                    return [4 /*yield*/, anchor.Program.fetchIdl(constants_1.AUCTION_HOUSE_PROGRAM_ID, provider)];
                case 1:
                    idl = _a.sent();
                    return [2 /*return*/, new anchor.Program(idl, constants_1.AUCTION_HOUSE_PROGRAM_ID, provider)];
            }
        });
    });
}
exports.loadAuctionHouseProgram = loadAuctionHouseProgram;
function loadTokenEntanglementProgream(walletKeyPair, env, customRpcUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var solConnection, walletWrapper, provider, idl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (customRpcUrl)
                        console.log('USING CUSTOM URL', customRpcUrl);
                    solConnection = new anchor.web3.Connection(
                    //@ts-ignore
                    customRpcUrl || anchor_1.web3.clusterApiUrl(env));
                    walletWrapper = new anchor.Wallet(walletKeyPair);
                    provider = new anchor.Provider(solConnection, walletWrapper, {
                        preflightCommitment: 'recent',
                    });
                    return [4 /*yield*/, anchor.Program.fetchIdl(constants_1.TOKEN_ENTANGLEMENT_PROGRAM_ID, provider)];
                case 1:
                    idl = _a.sent();
                    return [2 /*return*/, new anchor.Program(idl, constants_1.TOKEN_ENTANGLEMENT_PROGRAM_ID, provider)];
            }
        });
    });
}
exports.loadTokenEntanglementProgream = loadTokenEntanglementProgream;
function getTokenAmount(anchorProgram, account, mint) {
    return __awaiter(this, void 0, void 0, function () {
        var amount, token, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    amount = 0;
                    if (!!mint.equals(constants_1.WRAPPED_SOL_MINT)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, anchorProgram.provider.connection.getTokenAccountBalance(account)];
                case 2:
                    token = _a.sent();
                    amount = token.value.uiAmount * Math.pow(10, token.value.decimals);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    loglevel_1.default.error(e_1);
                    loglevel_1.default.info('Account ', account.toBase58(), 'didnt return value. Assuming 0 tokens.');
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, anchorProgram.provider.connection.getBalance(account)];
                case 6:
                    amount = _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/, amount];
            }
        });
    });
}
exports.getTokenAmount = getTokenAmount;

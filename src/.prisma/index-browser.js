
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.1
 * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
 */
Prisma.prismaVersion = {
  client: "4.16.1",
  engine: "b20ead4d3ab9e78ac112966e242ded703f4a052c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  profile: 'profile',
  isVerified: 'isVerified',
  phone: 'phone',
  createdAt: 'createdAt',
  provider: 'provider',
  userSchoolId: 'userSchoolId'
};

exports.Prisma.SchoolScalarFieldEnum = {
  schoolId: 'schoolId',
  org: 'org',
  x: 'x',
  y: 'y',
  atptCode: 'atptCode',
  defaultName: 'defaultName',
  name: 'name',
  type: 'type'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  key: 'key',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.PhoneVerifyRequestScalarFieldEnum = {
  id: 'id',
  phone: 'phone',
  code: 'code'
};

exports.Prisma.SocialLoginScalarFieldEnum = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  userId: 'userId',
  socialId: 'socialId',
  provider: 'provider'
};

exports.Prisma.AgreementScalarFieldEnum = {
  updatedAt: 'updatedAt',
  userId: 'userId',
  receive: 'receive'
};

exports.Prisma.UserSchoolVerifyScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  imageId: 'imageId',
  schoolId: 'schoolId',
  grade: 'grade',
  class: 'class',
  message: 'message',
  process: 'process',
  createdAt: 'createdAt',
  schoolName: 'schoolName',
  userName: 'userName',
  dept: 'dept'
};

exports.Prisma.UserSchoolScalarFieldEnum = {
  userId: 'userId',
  schoolId: 'schoolId',
  dept: 'dept',
  grade: 'grade',
  class: 'class'
};

exports.Prisma.BusStationScalarFieldEnum = {
  busStationId: 'busStationId',
  busStationName: 'busStationName',
  address: 'address',
  x: 'x',
  y: 'y'
};

exports.Prisma.BusRouteScalarFieldEnum = {
  busRouteId: 'busRouteId',
  busRouteNum: 'busRouteNum',
  busRouteTp: 'busRouteTp',
  endNodeName: 'endNodeName',
  startNodeName: 'startNodeName',
  endVehicleTime: 'endVehicleTime',
  startVehicleTime: 'startVehicleTime',
  intervalTime: 'intervalTime',
  intervalSatTime: 'intervalSatTime',
  intervalSunTime: 'intervalSunTime'
};

exports.Prisma.BusArrivalScalarFieldEnum = {
  busStationId: 'busStationId',
  busStationName: 'busStationName',
  busRouteNum: 'busRouteNum',
  busRouteTp: 'busRouteTp',
  arrprevStationCnt: 'arrprevStationCnt',
  arrTime: 'arrTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AskedUserScalarFieldEnum = {
  userId: 'userId',
  customId: 'customId',
  statusMessage: 'statusMessage',
  image: 'image',
  tags: 'tags',
  receiveAnonymous: 'receiveAnonymous',
  receiveOtherSchool: 'receiveOtherSchool',
  lastUpdateCustomId: 'lastUpdateCustomId'
};

exports.Prisma.AskedScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  askedUserId: 'askedUserId',
  process: 'process',
  question: 'question',
  answer: 'answer',
  createdAt: 'createdAt',
  answerTimeAt: 'answerTimeAt',
  isAnonymous: 'isAnonymous'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  loginId: 'loginId',
  password: 'password',
  flags: 'flags'
};

exports.Prisma.BoardScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  name: 'name',
  description: 'description',
  icon: 'icon',
  default: 'default',
  noticeId: 'noticeId'
};

exports.Prisma.BoardManagerScalarFieldEnum = {
  id: 'id',
  boardId: 'boardId',
  name: 'name',
  userId: 'userId'
};

exports.Prisma.ArticleScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  title: 'title',
  content: 'content',
  images: 'images',
  views: 'views',
  isAnonymous: 'isAnonymous',
  userId: 'userId',
  createdAt: 'createdAt',
  boardId: 'boardId'
};

exports.Prisma.DefaultBoardScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.DeletedArticleScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  title: 'title',
  content: 'content',
  images: 'images',
  isAnonymous: 'isAnonymous',
  views: 'views',
  userId: 'userId',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  boardId: 'boardId'
};

exports.Prisma.BoardRequestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  userId: 'userId',
  schoolId: 'schoolId',
  schoolName: 'schoolName',
  process: 'process',
  message: 'message'
};

exports.Prisma.CommentScalarFieldEnum = {
  userId: 'userId',
  content: 'content',
  isAnonymous: 'isAnonymous',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  id: 'id',
  articleId: 'articleId'
};

exports.Prisma.ReCommentScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  userId: 'userId',
  content: 'content',
  isAnonymous: 'isAnonymous',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  commentId: 'commentId'
};

exports.Prisma.ReportScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  reportUserId: 'reportUserId',
  targetType: 'targetType',
  message: 'message',
  targetId: 'targetId',
  reportUserName: 'reportUserName',
  process: 'process'
};

exports.Prisma.ArticleLikeScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  userId: 'userId',
  likeType: 'likeType'
};

exports.Prisma.CommentLikeScalarFieldEnum = {
  id: 'id',
  commentId: 'commentId',
  userId: 'userId',
  likeType: 'likeType'
};

exports.Prisma.ReCommentLikeScalarFieldEnum = {
  id: 'id',
  recommentId: 'recommentId',
  userId: 'userId',
  likeType: 'likeType'
};

exports.Prisma.HotArticleScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  schoolId: 'schoolId'
};

exports.Prisma.AdvertiseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  image: 'image',
  link: 'link',
  startDate: 'startDate',
  endDate: 'endDate'
};

exports.Prisma.PushDeviceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  createdAt: 'createdAt'
};

exports.Prisma.ReportBlindArticleScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.MealScalarFieldEnum = {
  id: 'id',
  MLSV_FGR: 'MLSV_FGR',
  DDISH_NM: 'DDISH_NM',
  ORPLC_INFO: 'ORPLC_INFO',
  CAL_INFO: 'CAL_INFO',
  NTR_INFO: 'NTR_INFO'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserLoginProviderType = {
  id: 'id',
  social: 'social'
};

exports.SocialLoginProviderType = {
  google: 'google',
  kakao: 'kakao'
};

exports.Process = {
  pending: 'pending',
  denied: 'denied',
  success: 'success'
};

exports.BoardRequestProcess = {
  pending: 'pending',
  denied: 'denied',
  success: 'success'
};

exports.ReportTargetType = {
  user: 'user',
  article: 'article',
  comment: 'comment',
  asked: 'asked',
  recomment: 'recomment'
};

exports.ReportProcess = {
  pending: 'pending',
  success: 'success'
};

exports.LikeType = {
  like: 'like',
  dislike: 'dislike'
};

exports.Prisma.ModelName = {
  User: 'User',
  School: 'School',
  Image: 'Image',
  PhoneVerifyRequest: 'PhoneVerifyRequest',
  SocialLogin: 'SocialLogin',
  Agreement: 'Agreement',
  UserSchoolVerify: 'UserSchoolVerify',
  UserSchool: 'UserSchool',
  BusStation: 'BusStation',
  BusRoute: 'BusRoute',
  BusArrival: 'BusArrival',
  AskedUser: 'AskedUser',
  Asked: 'Asked',
  Admin: 'Admin',
  Board: 'Board',
  BoardManager: 'BoardManager',
  Article: 'Article',
  DefaultBoard: 'DefaultBoard',
  DeletedArticle: 'DeletedArticle',
  BoardRequest: 'BoardRequest',
  Comment: 'Comment',
  ReComment: 'ReComment',
  Report: 'Report',
  ArticleLike: 'ArticleLike',
  CommentLike: 'CommentLike',
  ReCommentLike: 'ReCommentLike',
  HotArticle: 'HotArticle',
  Advertise: 'Advertise',
  PushDevice: 'PushDevice',
  ReportBlindArticle: 'ReportBlindArticle',
  Meal: 'Meal'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

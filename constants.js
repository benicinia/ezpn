exports.home = "http://127.0.0.1";
exports.surl = 'http://pay.ez/q/';
exports.bnk = "ab";
exports.cmt = 0.03;
exports.smt = 0;
exports.min_vanity_length = 4;
exports.num_of_urls_per_hour = 50;

exports.sqlib = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?) '; // inseert buyer dets

exports.sqlnz = 'SELECT ?? AS trans_id, ?? as balance,?? as tst FROM ?? ORDER BY `trans_id` DESC'; //GET merchant balance
exports.sqlat = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update buyer balance
exports.sqlny = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC';
exports.get_query = 'SELECT * FROM customer WHERE email = {email}';
//exports.get_query = 'SELECT * FROM urls WHERE segment = {SEGMENT}';
exports.add_query = 'INSERT INTO urls SET url = {URL}, segment = {SEGMENT}, ip = {IP}';
exports.check_url_query = 'SELECT * FROM urls WHERE url = {URL}';
exports.update_views_query = 'UPDATE urls SET num_of_clicks = {VIEWS} WHERE id = {ID}';
exports.insert_view = 'INSERT INTO stats SET ip = {IP}, url_id = {URL_ID}, referer = {REFERER}';
exports.check_ip_query = 'SELECT COUNT(id) as counted FROM urls WHERE datetime_added >= now() - INTERVAL 1 HOUR AND ip = {IP}';
exports.err = {
  type: 'TYPEERROR',
  msgtyp:'Internal server error',
  dup: 'ER_DUP_ENTRY',
  dupmsg: 'already exists',
  port: 3306,
  datdashase: 'netx', 
};
exports.host = '127.0.0.1';
exports.user = 'root';
exports.password = '';
exports.port = 3306;
exports.datdashase = 'netx';
exports.options = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    datdashase: 'netx', 
};
exports.ses = {
  key: 'session_cookie_name',
  keyad: 'session_cookie_name',
  secret: 'ssshhhhh',
  secreta: 'ssshhhhh',
  //store: sessionStore,
  resave: false,
  saveUninitialized: false
};
exports.blg = {
  am: '../bloga',
  oro: 'alerti',
  tig: 'እገዛ',
  som: 'haye',
  en: '../blog',
  
};

exports.invlrt = {
  am: 'በማለቅ ላይ ያሉ',
  oro: 'alerti',
  tig: 'tezazimu',
  som: 'haye',
  en: 'Inventory alert',
  
};
exports.task = {
  am: 'ያልተሰሩ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Tasks',
  
};
exports.transactions = {
  am: ' ልውውጦች',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Transactions',
  
};
exports.orders = {
  am: ' ትዛዞች',
  oro: 'tba',
  tig: 'ትዕዛዛት',
  som: 'tba',
  en: 'Orders',
  
};
exports.infb = {
  am: 'የመረጃ ዴስክ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Message board',
  
};
exports.shpk = {
  am: 'ብቃት',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Progress',
  
};
exports.dashb = {
  am: 'መምሪያ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Dashboard',
  
};




// section for send
exports.sndm = {             
  am: 'ለመላክ',  oro: 'tba',tig: 'tba',som: 'tba',en: 'Send',};
exports.bynthr = {             
  am: 'በሌላ',  oro: 'tba',tig: 'tba',som: 'tba',en: 'more',};
exports.byEml = {             
  am: 'በኢሜይል',  oro: 'tba',tig: 'ብኢሜይል',som: 'tba',en: 'By email',};
exports.byphn = {             
  am: 'በስልክ',  oro: 'tba',tig: 'ብቁጽሪ ሞባይል',som: 'tba',en: 'By phone',};

// section for dasboard usrnv
exports.inv = {             
  am: 'ነባር',  oro: 'tba',tig: 'tba',som: 'tba',en: 'In-store',};

exports.trn = {
  am: 'ሪፖርት',oro: 'tba',tig: 'tba', som: 'tba',en: 'Statements',
  
};
exports.btns = {
  am: 'እገዛ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Help',
};
exports.withd = {
  am: 'ወጭ ለማድረግ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Witdraw',
};
exports.ana = {
  am: 'ውጤታማነት',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Analytics',
};

exports.lnk = {
  am: 'ማስፈንጠሪያዎች',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Links',
};
exports.dlnk = {
  am: 'መዋጮ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Donation',
};
exports.plnk = {
  am: 'ከፍያ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Payrol',
};
exports.addp = {
  am: 'አዲስ ገቢ',
  oro: 'tba',
  tig: 'tba',
  som: 'tba',
  en: 'Products',
};

exports.EE_CANTCREATEFILE                                                                = 1;
exports.EE_READ                                                                          = 2;
exports.EE_WRITE                                                                         = 3;
exports.EE_BADCLOSE                                                                      = 4;
exports.EE_OUTOFMEMORY                                                                   = 5;
exports.EE_DELETE                                                                        = 6;
exports.EE_LINK                                                                          = 7;
exports.EE_EOFERR                                                                        = 9;
exports.EE_CANTLOCK                                                                      = 10;
exports.EE_CANTUNLOCK                                                                    = 11;
exports.EE_DIR                                                                           = 12;
exports.EE_STAT                                                                          = 13;
exports.EE_CANT_CHSIZE                                                                   = 14;
exports.EE_CANT_OPEN_STREAM                                                              = 15;
exports.EE_GETWD                                                                         = 16;
exports.EE_SETWD                                                                         = 17;
exports.EE_LINK_WARNING                                                                  = 18;
exports.EE_OPEN_WARNING                                                                  = 19;
exports.EE_DISK_FULL                                                                     = 20;
exports.EE_CANT_MKDIR                                                                    = 21;
exports.EE_UNKNOWN_CHARSET                                                               = 22;
exports.EE_OUT_OF_FILERESOURCES                                                          = 23;
exports.EE_CANT_READLINK                                                                 = 24;
exports.EE_CANT_SYMLINK                                                                  = 25;
exports.EE_REALPATH                                                                      = 26;
exports.EE_SYNC                                                                          = 27;
exports.EE_UNKNOWN_COLLATION                                                             = 28;
exports.EE_FILENOTFOUND                                                                  = 29;
exports.EE_FILE_NOT_CLOSED                                                               = 30;
exports.EE_CHANGE_OWNERSHIP                                                              = 31;
exports.EE_CHANGE_PERMISSIONS                                                            = 32;
exports.EE_CANT_SEEK                                                                     = 33;
exports.EE_CAPACITY_EXCEEDED                                                             = 34;
exports.HA_ERR_KEY_NOT_FOUND                                                             = 120;
exports.HA_ERR_FOUND_DUPP_KEY                                                            = 121;
exports.HA_ERR_INTERNAL_ERROR                                                            = 122;
exports.HA_ERR_RECORD_CHANGED                                                            = 123;
exports.HA_ERR_WRONG_INDEX                                                               = 124;
exports.HA_ERR_CRASHED                                                                   = 126;
exports.HA_ERR_WRONG_IN_RECORD                                                           = 127;
exports.HA_ERR_OUT_OF_MEM                                                                = 128;
exports.HA_ERR_NOT_A_TABLE                                                               = 130;
exports.HA_ERR_WRONG_COMMAND                                                             = 131;
exports.HA_ERR_OLD_FILE                                                                  = 132;
exports.HA_ERR_NO_ACTIVE_RECORD                                                          = 133;
exports.HA_ERR_RECORD_DELETED                                                            = 134;
exports.HA_ERR_RECORD_FILE_FULL                                                          = 135;
exports.HA_ERR_INDEX_FILE_FULL                                                           = 136;
exports.HA_ERR_END_OF_FILE                                                               = 137;
exports.HA_ERR_UNSUPPORTED                                                               = 138;
exports.HA_ERR_TOO_BIG_ROW                                                               = 139;
exports.HA_WRONG_CREATE_OPTION                                                           = 140;
exports.HA_ERR_FOUND_DUPP_UNIQUE                                                         = 141;
exports.HA_ERR_UNKNOWN_CHARSET                                                           = 142;
exports.HA_ERR_WRONG_MRG_TABLE_DEF                                                       = 143;
exports.HA_ERR_CRASHED_ON_REPAIR                                                         = 144;
exports.HA_ERR_CRASHED_ON_USAGE                                                          = 145;
exports.HA_ERR_LOCK_WAIT_TIMEOUT                                                         = 146;
exports.HA_ERR_LOCK_TABLE_FULL                                                           = 147;
exports.HA_ERR_READ_ONLY_TRANSACTION                                                     = 148;
exports.HA_ERR_LOCK_DEADLOCK                                                             = 149;
exports.HA_ERR_CANNOT_ADD_FOREIGN                                                        = 150;
exports.HA_ERR_NO_REFERENCED_ROW                                                         = 151;
exports.HA_ERR_ROW_IS_REFERENCED                                                         = 152;
exports.HA_ERR_NO_SAVEPOINT                                                              = 153;
exports.HA_ERR_NON_UNIQUE_BLOCK_SIZE                                                     = 154;
exports.HA_ERR_NO_SUCH_TABLE                                                             = 155;
exports.HA_ERR_TABLE_EXIST                                                               = 156;
exports.HA_ERR_NO_CONNECTION                                                             = 157;
exports.HA_ERR_NULL_IN_SPATIAL                                                           = 158;
exports.HA_ERR_TABLE_DEF_CHANGED                                                         = 159;
exports.HA_ERR_NO_PARTITION_FOUND                                                        = 160;
exports.HA_ERR_RBR_LOGGING_FAILED                                                        = 161;
exports.HA_ERR_DROP_INDEX_FK                                                             = 162;
exports.HA_ERR_FOREIGN_DUPLICATE_KEY                                                     = 163;
exports.HA_ERR_TABLE_NEEDS_UPGRADE                                                       = 164;
exports.HA_ERR_TABLE_READONLY                                                            = 165;
exports.HA_ERR_AUTOINC_READ_FAILED                                                       = 166;
exports.HA_ERR_AUTOINC_ERANGE                                                            = 167;
exports.HA_ERR_GENERIC                                                                   = 168;
exports.HA_ERR_RECORD_IS_THE_SAME                                                        = 169;
exports.HA_ERR_LOGGING_IMPOSSIBLE                                                        = 170;
exports.HA_ERR_CORRUPT_EVENT                                                             = 171;
exports.HA_ERR_NEW_FILE                                                                  = 172;
exports.HA_ERR_ROWS_EVENT_APPLY                                                          = 173;
exports.HA_ERR_INITIALIZATION                                                            = 174;
exports.HA_ERR_FILE_TOO_SHORT                                                            = 175;
exports.HA_ERR_WRONG_CRC                                                                 = 176;
exports.HA_ERR_TOO_MANY_CONCURRENT_TRXS                                                  = 177;
exports.HA_ERR_NOT_IN_LOCK_PARTITIONS                                                    = 178;
exports.HA_ERR_INDEX_COL_TOO_LONG                                                        = 179;
exports.HA_ERR_INDEX_CORRUPT                                                             = 180;
exports.HA_ERR_UNDO_REC_TOO_BIG                                                          = 181;
exports.HA_FTS_INVALID_DOCID                                                             = 182;
exports.HA_ERR_TABLE_IN_FK_CHECK                                                         = 183;
exports.HA_ERR_TABLESPACE_EXISTS                                                         = 184;
exports.HA_ERR_TOO_MANY_FIELDS                                                           = 185;
exports.HA_ERR_ROW_IN_WRONG_PARTITION                                                    = 186;
exports.HA_ERR_INNODB_READ_ONLY                                                          = 187;
exports.HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT                                             = 188;
exports.HA_ERR_TEMP_FILE_WRITE_FAILURE                                                   = 189;
exports.HA_ERR_INNODB_FORCED_RECOVERY                                                    = 190;
exports.HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE                                              = 191;
exports.HA_ERR_FK_DEPTH_EXCEEDED                                                         = 192;
exports.HA_MISSING_CREATE_OPTION                                                         = 193;
exports.HA_ERR_SE_OUT_OF_MEMORY                                                          = 194;
exports.HA_ERR_TABLE_CORRUPT                                                             = 195;
exports.HA_ERR_QUERY_INTERRUPTED                                                         = 196;
exports.HA_ERR_TABLESPACE_MISSING                                                        = 197;
exports.HA_ERR_TABLESPACE_IS_NOT_EMPTY                                                   = 198;
exports.HA_ERR_WRONG_FILE_NAME                                                           = 199;
exports.HA_ERR_NOT_ALLOWED_COMMAND                                                       = 200;
exports.HA_ERR_COMPUTE_FAILED                                                            = 201;
exports.ER_HASHCHK                                                                       = 1000;
exports.ER_NISAMCHK                                                                      = 1001;
exports.ER_NO                                                                            = 1002;
exports.ER_YES                                                                           = 1003;
exports.ER_CANT_CREATE_FILE                                                              = 1004;
exports.ER_CANT_CREATE_TABLE                                                             = 1005;
exports.ER_CANT_CREATE_DB                                                                = 1006;
exports.ER_DB_CREATE_EXISTS                                                              = 1007;
exports.ER_DB_DROP_EXISTS                                                                = 1008;
exports.ER_DB_DROP_DELETE                                                                = 1009;
exports.ER_DB_DROP_RMDIR                                                                 = 1010;
exports.ER_CANT_DELETE_FILE                                                              = 1011;
exports.ER_CANT_FIND_SYSTEM_REC                                                          = 1012;
exports.ER_CANT_GET_STAT                                                                 = 1013;
exports.ER_CANT_GET_WD                                                                   = 1014;
exports.ER_CANT_LOCK                                                                     = 1015;
exports.ER_CANT_OPEN_FILE                                                                = 1016;
exports.ER_FILE_NOT_FOUND                                                                = 1017;
exports.ER_CANT_READ_DIR                                                                 = 1018;
exports.ER_CANT_SET_WD                                                                   = 1019;
exports.ER_CHECKREAD                                                                     = 1020;
exports.ER_DISK_FULL                                                                     = 1021;
exports.ER_DUP_KEY                                                                       = 1022;
exports.ER_ERROR_ON_CLOSE                                                                = 1023;
exports.ER_ERROR_ON_READ                                                                 = 1024;
exports.ER_ERROR_ON_RENAME                                                               = 1025;
exports.ER_ERROR_ON_WRITE                                                                = 1026;
exports.ER_FILE_USED                                                                     = 1027;
exports.ER_FILSORT_ABORT                                                                 = 1028;
exports.ER_FORM_NOT_FOUND                                                                = 1029;
exports.ER_GET_ERRNO                                                                     = 1030;
exports.ER_ILLEGAL_HA                                                                    = 1031;
exports.ER_KEY_NOT_FOUND                                                                 = 1032;
exports.ER_NOT_FORM_FILE                                                                 = 1033;
exports.ER_NOT_KEYFILE                                                                   = 1034;
exports.ER_OLD_KEYFILE                                                                   = 1035;
exports.ER_OPEN_AS_READONLY                                                              = 1036;
exports.ER_OUTOFMEMORY                                                                   = 1037;
exports.ER_OUT_OF_SORTMEMORY                                                             = 1038;
exports.ER_UNEXPECTED_EOF                                                                = 1039;
exports.ER_CON_COUNT_ERROR                                                               = 1040;
exports.ER_OUT_OF_RESOURCES                                                              = 1041;
exports.ER_BAD_HOST_ERROR                                                                = 1042;
exports.ER_HANDSHAKE_ERROR                                                               = 1043;
exports.ER_DBACCESS_DENIED_ERROR                                                         = 1044;
exports.ER_ACCESS_DENIED_ERROR                                                           = 1045;
exports.ER_NO_DB_ERROR                                                                   = 1046;
exports.ER_UNKNOWN_COM_ERROR                                                             = 1047;
exports.ER_BAD_NULL_ERROR                                                                = 1048;
exports.ER_BAD_DB_ERROR                                                                  = 1049;
exports.ER_TABLE_EXISTS_ERROR                                                            = 1050;
exports.ER_BAD_TABLE_ERROR                                                               = 1051;
exports.ER_NON_UNIQ_ERROR                                                                = 1052;
exports.ER_SERVER_SHUTDOWN                                                               = 1053;
exports.ER_BAD_FIELD_ERROR                                                               = 1054;
exports.ER_WRONG_FIELD_WITH_GROUP                                                        = 1055;
exports.ER_WRONG_GROUP_FIELD                                                             = 1056;
exports.ER_WRONG_SUM_SELECT                                                              = 1057;
exports.ER_WRONG_VALUE_COUNT                                                             = 1058;
exports.ER_TOO_LONG_IDENT                                                                = 1059;
exports.ER_DUP_FIELDNAME                                                                 = 1060;
exports.ER_DUP_KEYNAME                                                                   = 1061;
exports.ER_DUP_ENTRY                                                                     = 'already exists';
exports.ER_WRONG_FIELD_SPEC                                                              = 1063;
exports.ER_PARSE_ERROR                                                                   = 1064;
exports.ER_EMPTY_QUERY                                                                   = 1065;
exports.ER_NONUNIQ_TABLE                                                                 = 1066;
exports.ER_INVALID_DEFAULT                                                               = 1067;
exports.ER_MULTIPLE_PRI_KEY                                                              = 1068;
exports.ER_TOO_MANY_KEYS                                                                 = 1069;
exports.ER_TOO_MANY_KEY_PARTS                                                            = 1070;
exports.ER_TOO_LONG_KEY                                                                  = 1071;
exports.ER_KEY_COLUMN_DOES_NOT_EXITS                                                     = 1072;
exports.ER_BLOB_USED_AS_KEY                                                              = 1073;
exports.ER_TOO_BIG_FIELDLENGTH                                                           = 1074;
exports.ER_WRONG_AUTO_KEY                                                                = 1075;
exports.ER_READY                                                                         = 1076;
exports.ER_NORMAL_SHUTDOWN                                                               = 1077;
exports.ER_GOT_SIGNAL                                                                    = 1078;
exports.ER_SHUTDOWN_COMPLETE                                                             = 1079;
exports.ER_FORCING_CLOSE                                                                 = 1080;
exports.ER_IPSOCK_ERROR                                                                  = 1081;
exports.ER_NO_SUCH_INDEX                                                                 = 1082;
exports.ER_WRONG_FIELD_TERMINATORS                                                       = 1083;
exports.ER_BLOBS_AND_NO_TERMINATED                                                       = 1084;
exports.ER_TEXTFILE_NOT_READABLE                                                         = 1085;
exports.ER_FILE_EXISTS_ERROR                                                             = 1086;
exports.ER_LOAD_INFO                                                                     = 1087;
exports.ER_ALTER_INFO                                                                    = 1088;
exports.ER_WRONG_SUB_KEY                                                                 = 1089;
exports.ER_CANT_REMOVE_ALL_FIELDS                                                        = 1090;
exports.ER_CANT_DROP_FIELD_OR_KEY                                                        = 1091;
exports.ER_INSERT_INFO                                                                   = 1092;
exports.ER_UPDATE_TABLE_USED                                                             = 1093;
exports.ER_NO_SUCH_THREAD                                                                = 1094;
exports.ER_KILL_DENIED_ERROR                                                             = 1095;
exports.ER_NO_TABLES_USED                                                                = 1096;
exports.ER_TOO_BIG_SET                                                                   = 1097;
exports.ER_NO_UNIQUE_LOGFILE                                                             = 1098;
exports.ER_TABLE_NOT_LOCKED_FOR_WRITE                                                    = 1099;
exports.ER_TABLE_NOT_LOCKED                                                              = 1100;
exports.ER_BLOB_CANT_HAVE_DEFAULT                                                        = 1101;
exports.ER_WRONG_DB_NAME                                                                 = 1102;
exports.ER_WRONG_TABLE_NAME                                                              = 1103;
exports.ER_TOO_BIG_SELECT                                                                = 1104;
exports.ER_UNKNOWN_ERROR                                                                 = 1105;
exports.ER_UNKNOWN_PROCEDURE                                                             = 1106;
exports.ER_WRONG_PARAMCOUNT_TO_PROCEDURE                                                 = 1107;
exports.ER_WRONG_PARAMETERS_TO_PROCEDURE                                                 = 1108;
exports.ER_UNKNOWN_TABLE                                                                 = 1109;
exports.ER_FIELD_SPECIFIED_TWICE                                                         = 1110;
exports.ER_INVALID_GROUP_FUNC_USE                                                        = 1111;
exports.ER_UNSUPPORTED_EXTENSION                                                         = 1112;
exports.ER_TABLE_MUST_HAVE_COLUMNS                                                       = 1113;
exports.ER_RECORD_FILE_FULL                                                              = 1114;
exports.ER_UNKNOWN_CHARACTER_SET                                                         = 1115;
exports.ER_TOO_MANY_TABLES                                                               = 1116;
exports.ER_TOO_MANY_FIELDS                                                               = 1117;
exports.ER_TOO_BIG_ROWSIZE                                                               = 1118;
exports.ER_STACK_OVERRUN                                                                 = 1119;
exports.ER_WRONG_OUTER_JOIN                                                              = 1120;
exports.ER_NULL_COLUMN_IN_INDEX                                                          = 1121;
exports.ER_CANT_FIND_UDF                                                                 = 1122;
exports.ER_CANT_INITIALIZE_UDF                                                           = 1123;
exports.ER_UDF_NO_PATHS                                                                  = 1124;
exports.ER_UDF_EXISTS                                                                    = 1125;
exports.ER_CANT_OPEN_LIBRARY                                                             = 1126;
exports.ER_CANT_FIND_DL_ENTRY                                                            = 1127;
exports.ER_FUNCTION_NOT_DEFINED                                                          = 1128;
exports.ER_HOST_IS_BLOCKED                                                               = 1129;
exports.ER_HOST_NOT_PRIVILEGED                                                           = 1130;
exports.ER_PASSWORD_ANONYMOUS_USER                                                       = 1131;
exports.ER_PASSWORD_NOT_ALLOWED                                                          = 1132;
exports.ER_PASSWORD_NO_MATCH                                                             = 1133;
exports.ER_UPDATE_INFO                                                                   = 1134;
exports.ER_CANT_CREATE_THREAD                                                            = 1135;
exports.ER_WRONG_VALUE_COUNT_ON_ROW                                                      = 1136;
exports.ER_CANT_REOPEN_TABLE                                                             = 1137;
exports.ER_INVALID_USE_OF_NULL                                                           = 1138;
exports.ER_REGEXP_ERROR                                                                  = 1139;
exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS                                                  = 1140;
exports.ER_NONEXISTING_GRANT                                                             = 1141;
exports.ER_TABLEACCESS_DENIED_ERROR                                                      = 1142;
exports.ER_COLUMNACCESS_DENIED_ERROR                                                     = 1143;
exports.ER_ILLEGAL_GRANT_FOR_TABLE                                                       = 1144;
exports.ER_GRANT_WRONG_HOST_OR_USER                                                      = 1145;
exports.ER_NO_SUCH_TABLE                                                                 = 1146;
exports.ER_NONEXISTING_TABLE_GRANT                                                       = 1147;
exports.ER_NOT_ALLOWED_COMMAND                                                           = 1148;
exports.ER_SYNTAX_ERROR                                                                  = 1149;
exports.ER_DELAYED_CANT_CHANGE_LOCK                                                      = 1150;
exports.ER_TOO_MANY_DELAYED_THREADS                                                      = 1151;
exports.ER_ABORTING_CONNECTION                                                           = 1152;
exports.ER_NET_PACKET_TOO_LARGE                                                          = 1153;
exports.ER_NET_READ_ERROR_FROM_PIPE                                                      = 1154;
exports.ER_NET_FCNTL_ERROR                                                               = 1155;
exports.ER_NET_PACKETS_OUT_OF_ORDER                                                      = 1156;
exports.ER_NET_UNCOMPRESS_ERROR                                                          = 1157;
exports.ER_NET_READ_ERROR                                                                = 1158;
exports.ER_NET_READ_INTERRUPTED                                                          = 1159;
exports.ER_NET_ERROR_ON_WRITE                                                            = 1160;
exports.ER_NET_WRITE_INTERRUPTED                                                         = 1161;
exports.ER_TOO_LONG_STRING                                                               = 1162;
exports.ER_TABLE_CANT_HANDLE_BLOB                                                        = 1163;
exports.ER_TABLE_CANT_HANDLE_AUTO_INCREMENT                                              = 1164;
exports.ER_DELAYED_INSERT_TABLE_LOCKED                                                   = 1165;
exports.ER_WRONG_COLUMN_NAME                                                             = 1166;
exports.ER_WRONG_KEY_COLUMN                                                              = 1167;
exports.ER_WRONG_MRG_TABLE                                                               = 1168;
exports.ER_DUP_UNIQUE                                                                    = 1169;
exports.ER_BLOB_KEY_WITHOUT_LENGTH                                                       = 1170;
exports.ER_PRIMARY_CANT_HAVE_NULL                                                        = 1171;
exports.ER_TOO_MANY_ROWS                                                                 = 1172;
exports.ER_REQUIRES_PRIMARY_KEY                                                          = 1173;
exports.ER_NO_RAID_COMPILED                                                              = 1174;
exports.ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE                                               = 1175;
exports.ER_KEY_DOES_NOT_EXITS                                                            = 1176;
exports.ER_CHECK_NO_SUCH_TABLE                                                           = 1177;
exports.ER_CHECK_NOT_IMPLEMENTED                                                         = 1178;
exports.ER_CANT_DO_THIS_DURING_AN_TRANSACTION                                            = 1179;
exports.ER_ERROR_DURING_COMMIT                                                           = 1180;
exports.ER_ERROR_DURING_ROLLBACK                                                         = 1181;
exports.ER_ERROR_DURING_FLUSH_LOGS                                                       = 1182;
exports.ER_ERROR_DURING_CHECKPOINT                                                       = 1183;
exports.ER_NEW_ABORTING_CONNECTION                                                       = 1184;
exports.ER_DUMP_NOT_IMPLEMENTED                                                          = 1185;
exports.ER_FLUSH_MASTER_BINLOG_CLOSED                                                    = 1186;
exports.ER_INDEX_REBUILD                                                                 = 1187;
exports.ER_MASTER                                                                        = 1188;
exports.ER_MASTER_NET_READ                                                               = 1189;
exports.ER_MASTER_NET_WRITE                                                              = 1190;
exports.ER_FT_MATCHING_KEY_NOT_FOUND                                                     = 1191;
exports.ER_LOCK_OR_ACTIVE_TRANSACTION                                                    = 1192;
exports.ER_UNKNOWN_SYSTEM_VARIABLE                                                       = 1193;
exports.ER_CRASHED_ON_USAGE                                                              = 1194;
exports.ER_CRASHED_ON_REPAIR                                                             = 1195;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK                                                 = 1196;
exports.ER_TRANS_CACHE_FULL                                                              = 1197;
exports.ER_SLAVE_MUST_STOP                                                               = 1198;
exports.ER_SLAVE_NOT_RUNNING                                                             = 1199;
exports.ER_BAD_SLAVE                                                                     = 1200;
exports.ER_MASTER_INFO                                                                   = 1201;
exports.ER_SLAVE_THREAD                                                                  = 1202;
exports.ER_TOO_MANY_USER_CONNECTIONS                                                     = 1203;
exports.ER_SET_CONSTANTS_ONLY                                                            = 1204;
exports.ER_LOCK_WAIT_TIMEOUT                                                             = 1205;
exports.ER_LOCK_TABLE_FULL                                                               = 1206;
exports.ER_READ_ONLY_TRANSACTION                                                         = 1207;
exports.ER_DROP_DB_WITH_READ_LOCK                                                        = 1208;
exports.ER_CREATE_DB_WITH_READ_LOCK                                                      = 1209;
exports.ER_WRONG_ARGUMENTS                                                               = 1210;
exports.ER_NO_PERMISSION_TO_CREATE_USER                                                  = 1211;
exports.ER_UNION_TABLES_IN_DIFFERENT_DIR                                                 = 1212;
exports.ER_LOCK_DEADLOCK                                                                 = 1213;
exports.ER_TABLE_CANT_HANDLE_FT                                                          = 1214;
exports.ER_CANNOT_ADD_FOREIGN                                                            = 1215;
exports.ER_NO_REFERENCED_ROW                                                             = 1216;
exports.ER_ROW_IS_REFERENCED                                                             = 1217;
exports.ER_CONNECT_TO_MASTER                                                             = 1218;
exports.ER_QUERY_ON_MASTER                                                               = 1219;
exports.ER_ERROR_WHEN_EXECUTING_COMMAND                                                  = 1220;
exports.ER_WRONG_USAGE                                                                   = 1221;
exports.ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT                                             = 1222;
exports.ER_CANT_UPDATE_WITH_READLOCK                                                     = 1223;
exports.ER_MIXING_NOT_ALLOWED                                                            = 1224;
exports.ER_DUP_ARGUMENT                                                                  = 1225;
exports.ER_USER_LIMIT_REACHED                                                            = 1226;
exports.ER_SPECIFIC_ACCESS_DENIED_ERROR                                                  = 1227;
exports.ER_LOCAL_VARIABLE                                                                = 1228;
exports.ER_GLOBAL_VARIABLE                                                               = 1229;
exports.ER_NO_DEFAULT                                                                    = 1230;
exports.ER_WRONG_VALUE_FOR_VAR                                                           = 1231;
exports.ER_WRONG_TYPE_FOR_VAR                                                            = 1232;
exports.ER_VAR_CANT_BE_READ                                                              = 1233;
exports.ER_CANT_USE_OPTION_HERE                                                          = 1234;
exports.ER_NOT_SUPPORTED_YET                                                             = 1235;
exports.ER_MASTER_FATAL_ERROR_READING_BINLOG                                             = 1236;
exports.ER_SLAVE_IGNORED_TABLE                                                           = 1237;
exports.ER_INCORRECT_GLOBAL_LOCAL_VAR                                                    = 1238;
exports.ER_WRONG_FK_DEF                                                                  = 1239;
exports.ER_KEY_REF_DO_NOT_MATCH_TABLE_REF                                                = 1240;
exports.ER_OPERAND_COLUMNS                                                               = 1241;
exports.ER_SUBQUERY_NO_1_ROW                                                             = 1242;
exports.ER_UNKNOWN_STMT_HANDLER                                                          = 1243;
exports.ER_CORRUPT_HELP_DB                                                               = 1244;
exports.ER_CYCLIC_REFERENCE                                                              = 1245;
exports.ER_AUTO_CONVERT                                                                  = 1246;
exports.ER_ILLEGAL_REFERENCE                                                             = 1247;
exports.ER_DERIVED_MUST_HAVE_ALIAS                                                       = 1248;
exports.ER_SELECT_REDUCED                                                                = 1249;
exports.ER_TABLENAME_NOT_ALLOWED_HERE                                                    = 1250;
exports.ER_NOT_SUPPORTED_AUTH_MODE                                                       = 1251;
exports.ER_SPATIAL_CANT_HAVE_NULL                                                        = 1252;
exports.ER_COLLATION_CHARSET_MISMATCH                                                    = 1253;
exports.ER_SLAVE_WAS_RUNNING                                                             = 1254;
exports.ER_SLAVE_WAS_NOT_RUNNING                                                         = 1255;
exports.ER_TOO_BIG_FOR_UNCOMPRESS                                                        = 1256;
exports.ER_ZLIB_Z_MEM_ERROR                                                              = 1257;
exports.ER_ZLIB_Z_BUF_ERROR                                                              = 1258;
exports.ER_ZLIB_Z_DATA_ERROR                                                             = 1259;
exports.ER_CUT_VALUE_GROUP_CONCAT                                                        = 1260;
exports.ER_WARN_TOO_FEW_RECORDS                                                          = 1261;
exports.ER_WARN_TOO_MANY_RECORDS                                                         = 1262;
exports.ER_WARN_NULL_TO_NOTNULL                                                          = 1263;
exports.ER_WARN_DATA_OUT_OF_RANGE                                                        = 1264;
exports.WARN_DATA_TRUNCATED                                                              = 1265;
exports.ER_WARN_USING_OTHER_HANDLER                                                      = 1266;
exports.ER_CANT_AGGREGATE_2COLLATIONS                                                    = 1267;
exports.ER_DROP_USER                                                                     = 1268;
exports.ER_REVOKE_GRANTS                                                                 = 1269;
exports.ER_CANT_AGGREGATE_3COLLATIONS                                                    = 1270;
exports.ER_CANT_AGGREGATE_NCOLLATIONS                                                    = 1271;
exports.ER_VARIABLE_IS_NOT_STRUCT                                                        = 1272;
exports.ER_UNKNOWN_COLLATION                                                             = 1273;
exports.ER_SLAVE_IGNORED_SSL_PARAMS                                                      = 1274;
exports.ER_SERVER_IS_IN_SECURE_AUTH_MODE                                                 = 1275;
exports.ER_WARN_FIELD_RESOLVED                                                           = 1276;
exports.ER_BAD_SLAVE_UNTIL_COND                                                          = 1277;
exports.ER_MISSING_SKIP_SLAVE                                                            = 1278;
exports.ER_UNTIL_COND_IGNORED                                                            = 1279;
exports.ER_WRONG_NAME_FOR_INDEX                                                          = 1280;
exports.ER_WRONG_NAME_FOR_CATALOG                                                        = 1281;
exports.ER_WARN_QC_RESIZE                                                                = 1282;
exports.ER_BAD_FT_COLUMN                                                                 = 1283;
exports.ER_UNKNOWN_KEY_CACHE                                                             = 1284;
exports.ER_WARN_HOSTNAME_WONT_WORK                                                       = 1285;
exports.ER_UNKNOWN_STORAGE_ENGINE                                                        = 1286;
exports.ER_WARN_DEPRECATED_SYNTAX                                                        = 1287;
exports.ER_NON_UPDATABLE_TABLE                                                           = 1288;
exports.ER_FEATURE_DISABLED                                                              = 1289;
exports.ER_OPTION_PREVENTS_STATEMENT                                                     = 1290;
exports.ER_DUPLICATED_VALUE_IN_TYPE                                                      = 1291;
exports.ER_TRUNCATED_WRONG_VALUE                                                         = 1292;
exports.ER_TOO_MUCH_AUTO_TIMESTAMP_COLS                                                  = 1293;
exports.ER_INVALID_ON_UPDATE                                                             = 1294;
exports.ER_UNSUPPORTED_PS                                                                = 1295;
exports.ER_GET_ERRMSG                                                                    = 1296;
exports.ER_GET_TEMPORARY_ERRMSG                                                          = 1297;
exports.ER_UNKNOWN_TIME_ZONE                                                             = 1298;
exports.ER_WARN_INVALID_TIMESTAMP                                                        = 1299;
exports.ER_INVALID_CHARACTER_STRING                                                      = 1300;
exports.ER_WARN_ALLOWED_PACKET_OVERFLOWED                                                = 1301;
exports.ER_CONFLICTING_DECLARATIONS                                                      = 1302;
exports.ER_SP_NO_RECURSIVE_CREATE                                                        = 1303;
exports.ER_SP_ALREADY_EXISTS                                                             = 1304;
exports.ER_SP_DOES_NOT_EXIST                                                             = 1305;
exports.ER_SP_DROP_FAILED                                                                = 1306;
exports.ER_SP_STORE_FAILED                                                               = 1307;
exports.ER_SP_LILABEL_MISMATCH                                                           = 1308;
exports.ER_SP_LABEL_REDEFINE                                                             = 1309;
exports.ER_SP_LABEL_MISMATCH                                                             = 1310;
exports.ER_SP_UNINIT_VAR                                                                 = 1311;
exports.ER_SP_BADSELECT                                                                  = 1312;
exports.ER_SP_BADRETURN                                                                  = 1313;
exports.ER_SP_BADSTATEMENT                                                               = 1314;
exports.ER_UPDATE_LOG_DEPRECATED_IGNORED                                                 = 1315;
exports.ER_UPDATE_LOG_DEPRECATED_TRANSLATED                                              = 1316;
exports.ER_QUERY_INTERRUPTED                                                             = 1317;
exports.ER_SP_WRONG_NO_OF_ARGS                                                           = 1318;
exports.ER_SP_COND_MISMATCH                                                              = 1319;
exports.ER_SP_NORETURN                                                                   = 1320;
exports.ER_SP_NORETURNEND                                                                = 1321;
exports.ER_SP_BAD_CURSOR_QUERY                                                           = 1322;
exports.ER_SP_BAD_CURSOR_SELECT                                                          = 1323;
exports.ER_SP_CURSOR_MISMATCH                                                            = 1324;
exports.ER_SP_CURSOR_ALREADY_OPEN                                                        = 1325;
exports.ER_SP_CURSOR_NOT_OPEN                                                            = 1326;
exports.ER_SP_UNDECLARED_VAR                                                             = 1327;
exports.ER_SP_WRONG_NO_OF_FETCH_ARGS                                                     = 1328;
exports.ER_SP_FETCH_NO_DATA                                                              = 1329;
exports.ER_SP_DUP_PARAM                                                                  = 1330;
exports.ER_SP_DUP_VAR                                                                    = 1331;
exports.ER_SP_DUP_COND                                                                   = 1332;
exports.ER_SP_DUP_CURS                                                                   = 1333;
exports.ER_SP_CANT_ALTER                                                                 = 1334;
exports.ER_SP_SUBSELECT_NYI                                                              = 1335;
exports.ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG                                                 = 1336;
exports.ER_SP_VARCOND_AFTER_CURSHNDLR                                                    = 1337;
exports.ER_SP_CURSOR_AFTER_HANDLER                                                       = 1338;
exports.ER_SP_CASE_NOT_FOUND                                                             = 1339;
exports.ER_FPARSER_TOO_BIG_FILE                                                          = 1340;
exports.ER_FPARSER_BAD_HEADER                                                            = 1341;
exports.ER_FPARSER_EOF_IN_COMMENT                                                        = 1342;
exports.ER_FPARSER_ERROR_IN_PARAMETER                                                    = 1343;
exports.ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER                                              = 1344;
exports.ER_VIEW_NO_EXPLAIN                                                               = 1345;
exports.ER_FRM_UNKNOWN_TYPE                                                              = 1346;
exports.ER_WRONG_OBJECT                                                                  = 1347;
exports.ER_NONUPDATEABLE_COLUMN                                                          = 1348;
exports.ER_VIEW_SELECT_DERIVED                                                           = 1349;
exports.ER_VIEW_SELECT_CLAUSE                                                            = 1350;
exports.ER_VIEW_SELECT_VARIABLE                                                          = 1351;
exports.ER_VIEW_SELECT_TMPTABLE                                                          = 1352;
exports.ER_VIEW_WRONG_LIST                                                               = 1353;
exports.ER_WARN_VIEW_MERGE                                                               = 1354;
exports.ER_WARN_VIEW_WITHOUT_KEY                                                         = 1355;
exports.ER_VIEW_INVALID                                                                  = 1356;
exports.ER_SP_NO_DROP_SP                                                                 = 1357;
exports.ER_SP_GOTO_IN_HNDLR                                                              = 1358;
exports.ER_TRG_ALREADY_EXISTS                                                            = 1359;
exports.ER_TRG_DOES_NOT_EXIST                                                            = 1360;
exports.ER_TRG_ON_VIEW_OR_TEMP_TABLE                                                     = 1361;
exports.ER_TRG_CANT_CHANGE_ROW                                                           = 1362;
exports.ER_TRG_NO_SUCH_ROW_IN_TRG                                                        = 1363;
exports.ER_NO_DEFAULT_FOR_FIELD                                                          = 1364;
exports.ER_DIVISION_BY_ZERO                                                              = 1365;
exports.ER_TRUNCATED_WRONG_VALUE_FOR_FIELD                                               = 1366;
exports.ER_ILLEGAL_VALUE_FOR_TYPE                                                        = 1367;
exports.ER_VIEW_NONUPD_CHECK                                                             = 1368;
exports.ER_VIEW_CHECK_FAILED                                                             = 1369;
exports.ER_PROCACCESS_DENIED_ERROR                                                       = 1370;
exports.ER_RELAY_LOG_FAIL                                                                = 1371;
exports.ER_PASSWD_LENGTH                                                                 = 1372;
exports.ER_UNKNOWN_TARGET_BINLOG                                                         = 1373;
exports.ER_IO_ERR_LOG_INDEX_READ                                                         = 1374;
exports.ER_BINLOG_PURGE_PROHIBITED                                                       = 1375;
exports.ER_FSEEK_FAIL                                                                    = 1376;
exports.ER_BINLOG_PURGE_FATAL_ERR                                                        = 1377;
exports.ER_LOG_IN_USE                                                                    = 1378;
exports.ER_LOG_PURGE_UNKNOWN_ERR                                                         = 1379;
exports.ER_RELAY_LOG_INIT                                                                = 1380;
exports.ER_NO_BINARY_LOGGING                                                             = 1381;
exports.ER_RESERVED_SYNTAX                                                               = 1382;
exports.ER_WSAS_FAILED                                                                   = 1383;
exports.ER_DIFF_GROUPS_PROC                                                              = 1384;
exports.ER_NO_GROUP_FOR_PROC                                                             = 1385;
exports.ER_ORDER_WITH_PROC                                                               = 1386;
exports.ER_LOGGING_PROHIBIT_CHANGING_OF                                                  = 1387;
exports.ER_NO_FILE_MAPPING                                                               = 1388;
exports.ER_WRONG_MAGIC                                                                   = 1389;
exports.ER_PS_MANY_PARAM                                                                 = 1390;
exports.ER_KEY_PART_0                                                                    = 1391;
exports.ER_VIEW_CHECKSUM                                                                 = 1392;
exports.ER_VIEW_MULTIUPDATE                                                              = 1393;
exports.ER_VIEW_NO_INSERT_FIELD_LIST                                                     = 1394;
exports.ER_VIEW_DELETE_MERGE_VIEW                                                        = 1395;
exports.ER_CANNOT_USER                                                                   = 1396;
exports.ER_XAER_NOTA                                                                     = 1397;
exports.ER_XAER_INVAL                                                                    = 1398;
exports.ER_XAER_RMFAIL                                                                   = 1399;
exports.ER_XAER_OUTSIDE                                                                  = 1400;
exports.ER_XAER_RMERR                                                                    = 1401;
exports.ER_XA_RBROLLBACK                                                                 = 1402;
exports.ER_NONEXISTING_PROC_GRANT                                                        = 1403;
exports.ER_PROC_AUTO_GRANT_FAIL                                                          = 1404;
exports.ER_PROC_AUTO_REVOKE_FAIL                                                         = 1405;
exports.ER_DATA_TOO_LONG                                                                 = 1406;
exports.ER_SP_BAD_SQLSTATE                                                               = 1407;
exports.ER_STARTUP                                                                       = 1408;
exports.ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR                                              = 1409;
exports.ER_CANT_CREATE_USER_WITH_GRANT                                                   = 1410;
exports.ER_WRONG_VALUE_FOR_TYPE                                                          = 1411;
exports.ER_TABLE_DEF_CHANGED                                                             = 1412;
exports.ER_SP_DUP_HANDLER                                                                = 1413;
exports.ER_SP_NOT_VAR_ARG                                                                = 1414;
exports.ER_SP_NO_RETSET                                                                  = 1415;
exports.ER_CANT_CREATE_GEOMETRY_OBJECT                                                   = 1416;
exports.ER_FAILED_ROUTINE_BREAK_BINLOG                                                   = 1417;
exports.ER_BINLOG_UNSAFE_ROUTINE                                                         = 1418;
exports.ER_BINLOG_CREATE_ROUTINE_NEED_SUPER                                              = 1419;
exports.ER_EXEC_STMT_WITH_OPEN_CURSOR                                                    = 1420;
exports.ER_STMT_HAS_NO_OPEN_CURSOR                                                       = 1421;
exports.ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG                                               = 1422;
exports.ER_NO_DEFAULT_FOR_VIEW_FIELD                                                     = 1423;
exports.ER_SP_NO_RECURSION                                                               = 1424;
exports.ER_TOO_BIG_SCALE                                                                 = 1425;
exports.ER_TOO_BIG_PRECISION                                                             = 1426;
exports.ER_M_BIGGER_THAN_D                                                               = 1427;
exports.ER_WRONG_LOCK_OF_SYSTEM_TABLE                                                    = 1428;
exports.ER_CONNECT_TO_FOREIGN_DATA_SOURCE                                                = 1429;
exports.ER_QUERY_ON_FOREIGN_DATA_SOURCE                                                  = 1430;
exports.ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST                                              = 1431;
exports.ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE                                       = 1432;
exports.ER_FOREIGN_DATA_STRING_INVALID                                                   = 1433;
exports.ER_CANT_CREATE_FEDERATED_TABLE                                                   = 1434;
exports.ER_TRG_IN_WRONG_SCHEMA                                                           = 1435;
exports.ER_STACK_OVERRUN_NEED_MORE                                                       = 1436;
exports.ER_TOO_LONG_BODY                                                                 = 1437;
exports.ER_WARN_CANT_DROP_DEFAULT_KEYCACHE                                               = 1438;
exports.ER_TOO_BIG_DISPLAYWIDTH                                                          = 1439;
exports.ER_XAER_DUPID                                                                    = 1440;
exports.ER_DATETIME_FUNCTION_OVERFLOW                                                    = 1441;
exports.ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG                                           = 1442;
exports.ER_VIEW_PREVENT_UPDATE                                                           = 1443;
exports.ER_PS_NO_RECURSION                                                               = 1444;
exports.ER_SP_CANT_SET_AUTOCOMMIT                                                        = 1445;
exports.ER_MALFORMED_DEFINER                                                             = 1446;
exports.ER_VIEW_FRM_NO_USER                                                              = 1447;
exports.ER_VIEW_OTHER_USER                                                               = 1448;
exports.ER_NO_SUCH_USER                                                                  = 1449;
exports.ER_FORBID_SCHEMA_CHANGE                                                          = 1450;
exports.ER_ROW_IS_REFERENCED_2                                                           = 1451;
exports.ER_NO_REFERENCED_ROW_2                                                           = 1452;
exports.ER_SP_BAD_VAR_SHADOW                                                             = 1453;
exports.ER_TRG_NO_DEFINER                                                                = 1454;
exports.ER_OLD_FILE_FORMAT                                                               = 1455;
exports.ER_SP_RECURSION_LIMIT                                                            = 1456;
exports.ER_SP_PROC_TABLE_CORRUPT                                                         = 1457;
exports.ER_SP_WRONG_NAME                                                                 = 1458;
exports.ER_TABLE_NEEDS_UPGRADE                                                           = 1459;
exports.ER_SP_NO_AGGREGATE                                                               = 1460;
exports.ER_MAX_PREPARED_STMT_COUNT_REACHED                                               = 1461;
exports.ER_VIEW_RECURSIVE                                                                = 1462;
exports.ER_NON_GROUPING_FIELD_USED                                                       = 1463;
exports.ER_TABLE_CANT_HANDLE_SPKEYS                                                      = 1464;
exports.ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA                                                  = 1465;
exports.ER_REMOVED_SPACES                                                                = 1466;
exports.ER_AUTOINC_READ_FAILED                                                           = 1467;
exports.ER_USERNAME                                                                      = 1468;
exports.ER_HOSTNAME                                                                      = 1469;
exports.ER_WRONG_STRING_LENGTH                                                           = 1470;
exports.ER_NON_INSERTABLE_TABLE                                                          = 1471;
exports.ER_ADMIN_WRONG_MRG_TABLE                                                         = 1472;
exports.ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT                                          = 1473;
exports.ER_NAME_BECOMES_EMPTY                                                            = 1474;
exports.ER_AMBIGUOUS_FIELD_TERM                                                          = 1475;
exports.ER_FOREIGN_SERVER_EXISTS                                                         = 1476;
exports.ER_FOREIGN_SERVER_DOESNT_EXIST                                                   = 1477;
exports.ER_ILLEGAL_HA_CREATE_OPTION                                                      = 1478;
exports.ER_PARTITION_REQUIRES_VALUES_ERROR                                               = 1479;
exports.ER_PARTITION_WRONG_VALUES_ERROR                                                  = 1480;
exports.ER_PARTITION_MAXVALUE_ERROR                                                      = 1481;
exports.ER_PARTITION_SUBPARTITION_ERROR                                                  = 1482;
exports.ER_PARTITION_SUBPART_MIX_ERROR                                                   = 1483;
exports.ER_PARTITION_WRONG_NO_PART_ERROR                                                 = 1484;
exports.ER_PARTITION_WRONG_NO_SUBPART_ERROR                                              = 1485;
exports.ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR                                            = 1486;
exports.ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR                                          = 1487;
exports.ER_FIELD_NOT_FOUND_PART_ERROR                                                    = 1488;
exports.ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR                                             = 1489;
exports.ER_INCONSISTENT_PARTITION_INFO_ERROR                                             = 1490;
exports.ER_PARTITION_FUNC_NOT_ALLOWED_ERROR                                              = 1491;
exports.ER_PARTITIONS_MUST_BE_DEFINED_ERROR                                              = 1492;
exports.ER_RANGE_NOT_INCREASING_ERROR                                                    = 1493;
exports.ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR                                          = 1494;
exports.ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR                                         = 1495;
exports.ER_PARTITION_ENTRY_ERROR                                                         = 1496;
exports.ER_MIX_HANDLER_ERROR                                                             = 1497;
exports.ER_PARTITION_NOT_DEFINED_ERROR                                                   = 1498;
exports.ER_TOO_MANY_PARTITIONS_ERROR                                                     = 1499;
exports.ER_SUBPARTITION_ERROR                                                            = 1500;
exports.ER_CANT_CREATE_HANDLER_FILE                                                      = 1501;
exports.ER_BLOB_FIELD_IN_PART_FUNC_ERROR                                                 = 1502;
exports.ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF                                              = 1503;
exports.ER_NO_PARTS_ERROR                                                                = 1504;
exports.ER_PARTITION_MGMT_ON_NONPARTITIONED                                              = 1505;
exports.ER_FOREIGN_KEY_ON_PARTITIONED                                                    = 1506;
exports.ER_DROP_PARTITION_NON_EXISTENT                                                   = 1507;
exports.ER_DROP_LAST_PARTITION                                                           = 1508;
exports.ER_COALESCE_ONLY_ON_HASH_PARTITION                                               = 1509;
exports.ER_REORG_HASH_ONLY_ON_SAME_NO                                                    = 1510;
exports.ER_REORG_NO_PARAM_ERROR                                                          = 1511;
exports.ER_ONLY_ON_RANGE_LIST_PARTITION                                                  = 1512;
exports.ER_ADD_PARTITION_SUBPART_ERROR                                                   = 1513;
exports.ER_ADD_PARTITION_NO_NEW_PARTITION                                                = 1514;
exports.ER_COALESCE_PARTITION_NO_PARTITION                                               = 1515;
exports.ER_REORG_PARTITION_NOT_EXIST                                                     = 1516;
exports.ER_SAME_NAME_PARTITION                                                           = 1517;
exports.ER_NO_BINLOG_ERROR                                                               = 1518;
exports.ER_CONSECUTIVE_REORG_PARTITIONS                                                  = 1519;
exports.ER_REORG_OUTSIDE_RANGE                                                           = 1520;
exports.ER_PARTITION_FUNCTION_FAILURE                                                    = 1521;
exports.ER_PART_STATE_ERROR                                                              = 1522;
exports.ER_LIMITED_PART_RANGE                                                            = 1523;
exports.ER_PLUGIN_IS_NOT_LOADED                                                          = 1524;
exports.ER_WRONG_VALUE                                                                   = 1525;
exports.ER_NO_PARTITION_FOR_GIVEN_VALUE                                                  = 1526;
exports.ER_FILEGROUP_OPTION_ONLY_ONCE                                                    = 1527;
exports.ER_CREATE_FILEGROUP_FAILED                                                       = 1528;
exports.ER_DROP_FILEGROUP_FAILED                                                         = 1529;
exports.ER_TABLESPACE_AUTO_EXTEND_ERROR                                                  = 1530;
exports.ER_WRONG_SIZE_NUMBER                                                             = 1531;
exports.ER_SIZE_OVERFLOW_ERROR                                                           = 1532;
exports.ER_ALTER_FILEGROUP_FAILED                                                        = 1533;
exports.ER_BINLOG_ROW_LOGGING_FAILED                                                     = 1534;
exports.ER_BINLOG_ROW_WRONG_TABLE_DEF                                                    = 1535;
exports.ER_BINLOG_ROW_RBR_TO_SBR                                                         = 1536;
exports.ER_EVENT_ALREADY_EXISTS                                                          = 1537;
exports.ER_EVENT_STORE_FAILED                                                            = 1538;
exports.ER_EVENT_DOES_NOT_EXIST                                                          = 1539;
exports.ER_EVENT_CANT_ALTER                                                              = 1540;
exports.ER_EVENT_DROP_FAILED                                                             = 1541;
exports.ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG                                        = 1542;
exports.ER_EVENT_ENDS_BEFORE_STARTS                                                      = 1543;
exports.ER_EVENT_EXEC_TIME_IN_THE_PAST                                                   = 1544;
exports.ER_EVENT_OPEN_TABLE_FAILED                                                       = 1545;
exports.ER_EVENT_NEITHER_M_EXPR_NOR_M_AT                                                 = 1546;
exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED                                              = 1547;
exports.ER_CANNOT_LOAD_FROM_TABLE                                                        = 1548;
exports.ER_EVENT_CANNOT_DELETE                                                           = 1549;
exports.ER_EVENT_COMPILE_ERROR                                                           = 1550;
exports.ER_EVENT_SAME_NAME                                                               = 1551;
exports.ER_EVENT_DATA_TOO_LONG                                                           = 1552;
exports.ER_DROP_INDEX_FK                                                                 = 1553;
exports.ER_WARN_DEPRECATED_SYNTAX_WITH_VER                                               = 1554;
exports.ER_CANT_WRITE_LOCK_LOG_TABLE                                                     = 1555;
exports.ER_CANT_LOCK_LOG_TABLE                                                           = 1556;
exports.ER_FOREIGN_DUPLICATE_KEY                                                         = 1557;
exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE                                          = 1558;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR                                         = 1559;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT                                 = 1560;
exports.ER_NDB_CANT_SWITCH_BINLOG_FORMAT                                                 = 1561;
exports.ER_PARTITION_NO_TEMPORARY                                                        = 1562;
exports.ER_PARTITION_CONST_DOMAIN_ERROR                                                  = 1563;
exports.ER_PARTITION_FUNCTION_IS_NOT_ALLOWED                                             = 1564;
exports.ER_DDL_LOG_ERROR                                                                 = 1565;
exports.ER_NULL_IN_VALUES_LESS_THAN                                                      = 1566;
exports.ER_WRONG_PARTITION_NAME                                                          = 1567;
exports.ER_CANT_CHANGE_TX_CHARACTERISTICS                                                = 1568;
exports.ER_DUP_ENTRY_AUTOINCREMENT_CASE                                                  = 1569;
exports.ER_EVENT_MODIFY_QUEUE_ERROR                                                      = 1570;
exports.ER_EVENT_SET_VAR_ERROR                                                           = 1571;
exports.ER_PARTITION_MERGE_ERROR                                                         = 1572;
exports.ER_CANT_ACTIVATE_LOG                                                             = 1573;
exports.ER_RBR_NOT_AVAILABLE                                                             = 1574;
exports.ER_BASE64_DECODE_ERROR                                                           = 1575;
exports.ER_EVENT_RECURSION_FORBIDDEN                                                     = 1576;
exports.ER_EVENTS_DB_ERROR                                                               = 1577;
exports.ER_ONLY_INTEGERS_ALLOWED                                                         = 1578;
exports.ER_UNSUPORTED_LOG_ENGINE                                                         = 1579;
exports.ER_BAD_LOG_STATEMENT                                                             = 1580;
exports.ER_CANT_RENAME_LOG_TABLE                                                         = 1581;
exports.ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT                                                = 1582;
exports.ER_WRONG_PARAMETERS_TO_NATIVE_FCT                                                = 1583;
exports.ER_WRONG_PARAMETERS_TO_STORED_FCT                                                = 1584;
exports.ER_NATIVE_FCT_NAME_COLLISION                                                     = 1585;
exports.ER_DUP_ENTRY_WITH_KEY_NAME                                                       = 1586;
exports.ER_BINLOG_PURGE_EMFILE                                                           = 1587;
exports.ER_EVENT_CANNOT_CREATE_IN_THE_PAST                                               = 1588;
exports.ER_EVENT_CANNOT_ALTER_IN_THE_PAST                                                = 1589;
exports.ER_SLAVE_INCIDENT                                                                = 1590;
exports.ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT                                           = 1591;
exports.ER_BINLOG_UNSAFE_STATEMENT                                                       = 1592;
exports.ER_SLAVE_FATAL_ERROR                                                             = 1593;
exports.ER_SLAVE_RELAY_LOG_READ_FAILURE                                                  = 1594;
exports.ER_SLAVE_RELAY_LOG_WRITE_FAILURE                                                 = 1595;
exports.ER_SLAVE_CREATE_EVENT_FAILURE                                                    = 1596;
exports.ER_SLAVE_MASTER_COM_FAILURE                                                      = 1597;
exports.ER_BINLOG_LOGGING_IMPOSSIBLE                                                     = 1598;
exports.ER_VIEW_NO_CREATION_CTX                                                          = 1599;
exports.ER_VIEW_INVALID_CREATION_CTX                                                     = 1600;
exports.ER_SR_INVALID_CREATION_CTX                                                       = 1601;
exports.ER_TRG_CORRUPTED_FILE                                                            = 1602;
exports.ER_TRG_NO_CREATION_CTX                                                           = 1603;
exports.ER_TRG_INVALID_CREATION_CTX                                                      = 1604;
exports.ER_EVENT_INVALID_CREATION_CTX                                                    = 1605;
exports.ER_TRG_CANT_OPEN_TABLE                                                           = 1606;
exports.ER_CANT_CREATE_SROUTINE                                                          = 1607;
exports.ER_NEVER_USED                                                                    = 1608;
exports.ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT                           = 1609;
exports.ER_SLAVE_CORRUPT_EVENT                                                           = 1610;
exports.ER_LOAD_DATA_INVALID_COLUMN                                                      = 1611;
exports.ER_LOG_PURGE_NO_FILE                                                             = 1612;
exports.ER_XA_RBTIMEOUT                                                                  = 1613;
exports.ER_XA_RBDEADLOCK                                                                 = 1614;
exports.ER_NEED_REPREPARE                                                                = 1615;
exports.ER_DELAYED_NOT_SUPPORTED                                                         = 1616;
exports.WARN_NO_MASTER_INFO                                                              = 1617;
exports.WARN_OPTION_IGNORED                                                              = 1618;
exports.ER_PLUGIN_DELETE_BUILTIN                                                         = 1619;
exports.WARN_PLUGIN_BUSY                                                                 = 1620;
exports.ER_VARIABLE_IS_READONLY                                                          = 1621;
exports.ER_WARN_ENGINE_TRANSACTION_ROLLBACK                                              = 1622;
exports.ER_SLAVE_HEARTBEAT_FAILURE                                                       = 1623;
exports.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE                                            = 1624;
exports.ER_NDB_REPLICATION_SCHEMA_ERROR                                                  = 1625;
exports.ER_CONFLICT_FN_PARSE_ERROR                                                       = 1626;
exports.ER_EXCEPTIONS_WRITE_ERROR                                                        = 1627;
exports.ER_TOO_LONG_TABLE_COMMENT                                                        = 1628;
exports.ER_TOO_LONG_FIELD_COMMENT                                                        = 1629;
exports.ER_FUNC_INEXISTENT_NAME_COLLISION                                                = 1630;
exports.ER_DATABASE_NAME                                                                 = 1631;
exports.ER_TABLE_NAME                                                                    = 1632;
exports.ER_PARTITION_NAME                                                                = 1633;
exports.ER_SUBPARTITION_NAME                                                             = 1634;
exports.ER_TEMPORARY_NAME                                                                = 1635;
exports.ER_RENAMED_NAME                                                                  = 1636;
exports.ER_TOO_MANY_CONCURRENT_TRXS                                                      = 1637;
exports.WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED                                         = 1638;
exports.ER_DEBUG_SYNC_TIMEOUT                                                            = 1639;
exports.ER_DEBUG_SYNC_HIT_LIMIT                                                          = 1640;
exports.ER_DUP_SIGNAL_SET                                                                = 1641;
exports.ER_SIGNAL_WARN                                                                   = 1642;
exports.ER_SIGNAL_NOT_FOUND                                                              = 1643;
exports.ER_SIGNAL_EXCEPTION                                                              = 1644;
exports.ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER                                               = 1645;
exports.ER_SIGNAL_BAD_CONDITION_TYPE                                                     = 1646;
exports.WARN_COND_ITEM_TRUNCATED                                                         = 1647;
exports.ER_COND_ITEM_TOO_LONG                                                            = 1648;
exports.ER_UNKNOWN_LOCALE                                                                = 1649;
exports.ER_SLAVE_IGNORE_SERVER_IDS                                                       = 1650;
exports.ER_QUERY_CACHE_DISABLED                                                          = 1651;
exports.ER_SAME_NAME_PARTITION_FIELD                                                     = 1652;
exports.ER_PARTITION_COLUMN_LIST_ERROR                                                   = 1653;
exports.ER_WRONG_TYPE_COLUMN_VALUE_ERROR                                                 = 1654;
exports.ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR                                          = 1655;
exports.ER_MAXVALUE_IN_VALUES_IN                                                         = 1656;
exports.ER_TOO_MANY_VALUES_ERROR                                                         = 1657;
exports.ER_ROW_SINGLE_PARTITION_FIELD_ERROR                                              = 1658;
exports.ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD                                     = 1659;
exports.ER_PARTITION_FIELDS_TOO_LONG                                                     = 1660;
exports.ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE                                             = 1661;
exports.ER_BINLOG_ROW_MODE_AND_STMT_ENGINE                                               = 1662;
exports.ER_BINLOG_UNSAFE_AND_STMT_ENGINE                                                 = 1663;
exports.ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE                                          = 1664;
exports.ER_BINLOG_STMT_MODE_AND_ROW_ENGINE                                               = 1665;
exports.ER_BINLOG_ROW_INJECTION_AND_STMT_MODE                                            = 1666;
exports.ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE                               = 1667;
exports.ER_BINLOG_UNSAFE_LIMIT                                                           = 1668;
exports.ER_BINLOG_UNSAFE_INSERT_DELAYED                                                  = 1669;
exports.ER_BINLOG_UNSAFE_SYSTEM_TABLE                                                    = 1670;
exports.ER_BINLOG_UNSAFE_AUTOINC_COLUMNS                                                 = 1671;
exports.ER_BINLOG_UNSAFE_UDF                                                             = 1672;
exports.ER_BINLOG_UNSAFE_SYSTEM_VARIABLE                                                 = 1673;
exports.ER_BINLOG_UNSAFE_SYSTEM_FUNCTION                                                 = 1674;
exports.ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS                                            = 1675;
exports.ER_MESSAGE_AND_STATEMENT                                                         = 1676;
exports.ER_SLAVE_CONVERSION_FAILED                                                       = 1677;
exports.ER_SLAVE_CANT_CREATE_CONVERSION                                                  = 1678;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT                              = 1679;
exports.ER_PATH_LENGTH                                                                   = 1680;
exports.ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT                                         = 1681;
exports.ER_WRONG_NATIVE_TABLE_STRUCTURE                                                  = 1682;
exports.ER_WRONG_PERFSCHEMA_USAGE                                                        = 1683;
exports.ER_WARN_I_S_SKIPPED_TABLE                                                        = 1684;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT                              = 1685;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT                                 = 1686;
exports.ER_SPATIAL_MUST_HAVE_GEOM_COL                                                    = 1687;
exports.ER_TOO_LONG_INDEX_COMMENT                                                        = 1688;
exports.ER_LOCK_ABORTED                                                                  = 1689;
exports.ER_DATA_OUT_OF_RANGE                                                             = 1690;
exports.ER_WRONG_SPVAR_TYPE_IN_LIMIT                                                     = 1691;
exports.ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE                        = 1692;
exports.ER_BINLOG_UNSAFE_MIXED_STATEMENT                                                 = 1693;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN                                = 1694;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN                                   = 1695;
exports.ER_FAILED_READ_FROM_PAR_FILE                                                     = 1696;
exports.ER_VALUES_IS_NOT_INT_TYPE_ERROR                                                  = 1697;
exports.ER_ACCESS_DENIED_NO_PASSWORD_ERROR                                               = 1698;
exports.ER_SET_PASSWORD_AUTH_PLUGIN                                                      = 1699;
exports.ER_GRANT_PLUGIN_USER_EXISTS                                                      = 1700;
exports.ER_TRUNCATE_ILLEGAL_FK                                                           = 1701;
exports.ER_PLUGIN_IS_PERMANENT                                                           = 1702;
exports.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN                                        = 1703;
exports.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX                                        = 1704;
exports.ER_STMT_CACHE_FULL                                                               = 1705;
exports.ER_MULTI_UPDATE_KEY_CONFLICT                                                     = 1706;
exports.ER_TABLE_NEEDS_REBUILD                                                           = 1707;
exports.WARN_OPTION_BELOW_LIMIT                                                          = 1708;
exports.ER_INDEX_COLUMN_TOO_LONG                                                         = 1709;
exports.ER_ERROR_IN_TRIGGER_BODY                                                         = 1710;
exports.ER_ERROR_IN_UNKNOWN_TRIGGER_BODY                                                 = 1711;
exports.ER_INDEX_CORRUPT                                                                 = 1712;
exports.ER_UNDO_RECORD_TOO_BIG                                                           = 1713;
exports.ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT                                            = 1714;
exports.ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE                                            = 1715;
exports.ER_BINLOG_UNSAFE_REPLACE_SELECT                                                  = 1716;
exports.ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT                                            = 1717;
exports.ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT                                           = 1718;
exports.ER_BINLOG_UNSAFE_UPDATE_IGNORE                                                   = 1719;
exports.ER_PLUGIN_NO_UNINSTALL                                                           = 1720;
exports.ER_PLUGIN_NO_INSTALL                                                             = 1721;
exports.ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT                                            = 1722;
exports.ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC                                           = 1723;
exports.ER_BINLOG_UNSAFE_INSERT_TWO_KEYS                                                 = 1724;
exports.ER_TABLE_IN_FK_CHECK                                                             = 1725;
exports.ER_UNSUPPORTED_ENGINE                                                            = 1726;
exports.ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST                                               = 1727;
exports.ER_CANNOT_LOAD_FROM_TABLE_V2                                                     = 1728;
exports.ER_MASTER_DELAY_VALUE_OUT_OF_RANGE                                               = 1729;
exports.ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT                            = 1730;
exports.ER_PARTITION_EXCHANGE_DIFFERENT_OPTION                                           = 1731;
exports.ER_PARTITION_EXCHANGE_PART_TABLE                                                 = 1732;
exports.ER_PARTITION_EXCHANGE_TEMP_TABLE                                                 = 1733;
exports.ER_PARTITION_INSTEAD_OF_SUBPARTITION                                             = 1734;
exports.ER_UNKNOWN_PARTITION                                                             = 1735;
exports.ER_TABLES_DIFFERENT_METADATA                                                     = 1736;
exports.ER_ROW_DOES_NOT_MATCH_PARTITION                                                  = 1737;
exports.ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX                                            = 1738;
exports.ER_WARN_INDEX_NOT_APPLICABLE                                                     = 1739;
exports.ER_PARTITION_EXCHANGE_FOREIGN_KEY                                                = 1740;
exports.ER_NO_SUCH_KEY_VALUE                                                             = 1741;
exports.ER_RPL_INFO_DATA_TOO_LONG                                                        = 1742;
exports.ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE                                           = 1743;
exports.ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE                                            = 1744;
exports.ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX                                       = 1745;
exports.ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT                                      = 1746;
exports.ER_PARTITION_CLAUSE_ON_NONPARTITIONED                                            = 1747;
exports.ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET                                        = 1748;
exports.ER_NO_SUCH_PARTITION                                                             = 1749;
exports.ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE                                            = 1750;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE                         = 1751;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE                         = 1752;
exports.ER_MTS_FEATURE_IS_NOT_SUPPORTED                                                  = 1753;
exports.ER_MTS_UPDATED_DBS_GREATER_MAX                                                   = 1754;
exports.ER_MTS_CANT_PARALLEL                                                             = 1755;
exports.ER_MTS_INCONSISTENT_DATA                                                         = 1756;
exports.ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING                                      = 1757;
exports.ER_DA_INVALID_CONDITION_NUMBER                                                   = 1758;
exports.ER_INSECURE_PLAIN_TEXT                                                           = 1759;
exports.ER_INSECURE_CHANGE_MASTER                                                        = 1760;
exports.ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO                                         = 1761;
exports.ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO                                      = 1762;
exports.ER_SQLTHREAD_WITH_SECURE_SLAVE                                                   = 1763;
exports.ER_TABLE_HAS_NO_FT                                                               = 1764;
exports.ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER                                        = 1765;
exports.ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION                                          = 1766;
exports.ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST                                            = 1767;
exports.ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION                                          = 1768;
exports.ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION                                          = 1769;
exports.ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL                     = 1770;
exports.ER_SKIPPING_LOGGED_TRANSACTION                                                   = 1771;
exports.ER_MALFORMED_GTID_SET_SPECIFICATION                                              = 1772;
exports.ER_MALFORMED_GTID_SET_ENCODING                                                   = 1773;
exports.ER_MALFORMED_GTID_SPECIFICATION                                                  = 1774;
exports.ER_GNO_EXHAUSTED                                                                 = 1775;
exports.ER_BAD_SLAVE_AUTO_POSITION                                                       = 1776;
exports.ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF                                      = 1777;
exports.ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET                          = 1778;
exports.ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON                             = 1779;
exports.ER_GTID_MODE_REQUIRES_BINLOG                                                     = 1780;
exports.ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF                              = 1781;
exports.ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON                          = 1782;
exports.ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF                     = 1783;
exports.ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF                                        = 1784;
exports.ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE                                           = 1785;
exports.ER_GTID_UNSAFE_CREATE_SELECT                                                     = 1786;
exports.ER_GTID_UNSAFE_CREATE_DROP_TEMPORARY_TABLE_IN_TRANSACTION                        = 1787;
exports.ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME                                  = 1788;
exports.ER_MASTER_HAS_PURGED_REQUIRED_GTIDS                                              = 1789;
exports.ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID                                           = 1790;
exports.ER_UNKNOWN_EXPLAIN_FORMAT                                                        = 1791;
exports.ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION                                         = 1792;
exports.ER_TOO_LONG_TABLE_PARTITION_COMMENT                                              = 1793;
exports.ER_SLAVE_CONFIGURATION                                                           = 1794;
exports.ER_INNODB_FT_LIMIT                                                               = 1795;
exports.ER_INNODB_NO_FT_TEMP_TABLE                                                       = 1796;
exports.ER_INNODB_FT_WRONG_DOCID_COLUMN                                                  = 1797;
exports.ER_INNODB_FT_WRONG_DOCID_INDEX                                                   = 1798;
exports.ER_INNODB_ONLINE_LOG_TOO_BIG                                                     = 1799;
exports.ER_UNKNOWN_ALTER_ALGORITHM                                                       = 1800;
exports.ER_UNKNOWN_ALTER_LOCK                                                            = 1801;
exports.ER_MTS_CHANGE_MASTER_CANT_RUN_WITH_GAPS                                          = 1802;
exports.ER_MTS_RECOVERY_FAILURE                                                          = 1803;
exports.ER_MTS_RESET_WORKERS                                                             = 1804;
exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2                                           = 1805;
exports.ER_SLAVE_SILENT_RETRY_TRANSACTION                                                = 1806;
exports.ER_DISCARD_FK_CHECKS_RUNNING                                                     = 1807;
exports.ER_TABLE_SCHEMA_MISMATCH                                                         = 1808;
exports.ER_TABLE_IN_SYSTEM_TABLESPACE                                                    = 1809;
exports.ER_IO_READ_ERROR                                                                 = 1810;
exports.ER_IO_WRITE_ERROR                                                                = 1811;
exports.ER_TABLESPACE_MISSING                                                            = 1812;
exports.ER_TABLESPACE_EXISTS                                                             = 1813;
exports.ER_TABLESPACE_DISCARDED                                                          = 1814;
exports.ER_INTERNAL_ERROR                                                                = 1815;
exports.ER_INNODB_IMPORT_ERROR                                                           = 1816;
exports.ER_INNODB_INDEX_CORRUPT                                                          = 1817;
exports.ER_INVALID_YEAR_COLUMN_LENGTH                                                    = 1818;
exports.ER_NOT_VALID_PASSWORD                                                            = 1819;
exports.ER_MUST_CHANGE_PASSWORD                                                          = 1820;
exports.ER_FK_NO_INDEX_CHILD                                                             = 1821;
exports.ER_FK_NO_INDEX_PARENT                                                            = 1822;
exports.ER_FK_FAIL_ADD_SYSTEM                                                            = 1823;
exports.ER_FK_CANNOT_OPEN_PARENT                                                         = 1824;
exports.ER_FK_INCORRECT_OPTION                                                           = 1825;
exports.ER_FK_DUP_NAME                                                                   = 1826;
exports.ER_PASSWORD_FORMAT                                                               = 1827;
exports.ER_FK_COLUMN_CANNOT_DROP                                                         = 1828;
exports.ER_FK_COLUMN_CANNOT_DROP_CHILD                                                   = 1829;
exports.ER_FK_COLUMN_NOT_NULL                                                            = 1830;
exports.ER_DUP_INDEX                                                                     = 1831;
exports.ER_FK_COLUMN_CANNOT_CHANGE                                                       = 1832;
exports.ER_FK_COLUMN_CANNOT_CHANGE_CHILD                                                 = 1833;
exports.ER_FK_CANNOT_DELETE_PARENT                                                       = 1834;
exports.ER_MALFORMED_PACKET                                                              = 1835;
exports.ER_READ_ONLY_MODE                                                                = 1836;
exports.ER_GTID_NEXT_TYPE_UNDEFINED_GROUP                                                = 1837;
exports.ER_VARIABLE_NOT_SETTABLE_IN_SP                                                   = 1838;
exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF                                    = 1839;
exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY                          = 1840;
exports.ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY                            = 1841;
exports.ER_GTID_PURGED_WAS_CHANGED                                                       = 1842;
exports.ER_GTID_EXECUTED_WAS_CHANGED                                                     = 1843;
exports.ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES                                           = 1844;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED                                                 = 1845;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON                                          = 1846;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY                                     = 1847;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION                                = 1848;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME                                = 1849;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE                              = 1850;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK                                 = 1851;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE                                   = 1852;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK                                     = 1853;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC                                  = 1854;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS                               = 1855;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS                               = 1856;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS                                      = 1857;
exports.ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE                              = 1858;
exports.ER_DUP_UNKNOWN_IN_INDEX                                                          = 1859;
exports.ER_IDENT_CAUSES_TOO_LONG_PATH                                                    = 1860;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL                                 = 1861;
exports.ER_MUST_CHANGE_PASSWORD_LOGIN                                                    = 1862;
exports.ER_ROW_IN_WRONG_PARTITION                                                        = 1863;
exports.ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX                                        = 1864;
exports.ER_INNODB_NO_FT_USES_PARSER                                                      = 1865;
exports.ER_BINLOG_LOGICAL_CORRUPTION                                                     = 1866;
exports.ER_WARN_PURGE_LOG_IN_USE                                                         = 1867;
exports.ER_WARN_PURGE_LOG_IS_ACTIVE                                                      = 1868;
exports.ER_AUTO_INCREMENT_CONFLICT                                                       = 1869;
exports.WARN_ON_BLOCKHOLE_IN_RBR                                                         = 1870;
exports.ER_SLAVE_MI_INIT_REPOSITORY                                                      = 1871;
exports.ER_SLAVE_RLI_INIT_REPOSITORY                                                     = 1872;
exports.ER_ACCESS_DENIED_CHANGE_USER_ERROR                                               = 1873;
exports.ER_INNODB_READ_ONLY                                                              = 1874;
exports.ER_STOP_SLAVE_SQL_THREAD_TIMEOUT                                                 = 1875;
exports.ER_STOP_SLAVE_IO_THREAD_TIMEOUT                                                  = 1876;
exports.ER_TABLE_CORRUPT                                                                 = 1877;
exports.ER_TEMP_FILE_WRITE_FAILURE                                                       = 1878;
exports.ER_INNODB_FT_AUX_NOT_HEX_ID                                                      = 1879;
exports.ER_OLD_TEMPORALS_UPGRADED                                                        = 1880;
exports.ER_INNODB_FORCED_RECOVERY                                                        = 1881;
exports.ER_AES_INVALID_IV                                                                = 1882;
exports.ER_PLUGIN_CANNOT_BE_UNINSTALLED                                                  = 1883;
exports.ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP                        = 1884;
exports.ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER                                              = 1885;
exports.ER_MISSING_KEY                                                                   = 1886;
exports.WARN_NAMED_PIPE_ACCESS_EVERYONE                                                  = 1887;
exports.ER_FOUND_MISSING_GTIDS                                                           = 1888;
exports.ER_FILE_CORRUPT                                                                  = 3000;
exports.ER_ERROR_ON_MASTER                                                               = 3001;
exports.ER_INCONSISTENT_ERROR                                                            = 3002;
exports.ER_STORAGE_ENGINE_NOT_LOADED                                                     = 3003;
exports.ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER                                         = 3004;
exports.ER_WARN_LEGACY_SYNTAX_CONVERTED                                                  = 3005;
exports.ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN                                                 = 3006;
exports.ER_CANNOT_DISCARD_TEMPORARY_TABLE                                                = 3007;
exports.ER_FK_DEPTH_EXCEEDED                                                             = 3008;
exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2                                       = 3009;
exports.ER_WARN_TRIGGER_DOESNT_HAVE_CREATED                                              = 3010;
exports.ER_REFERENCED_TRG_DOES_NOT_EXIST                                                 = 3011;
exports.ER_EXPLAIN_NOT_SUPPORTED                                                         = 3012;
exports.ER_INVALID_FIELD_SIZE                                                            = 3013;
exports.ER_MISSING_HA_CREATE_OPTION                                                      = 3014;
exports.ER_ENGINE_OUT_OF_MEMORY                                                          = 3015;
exports.ER_PASSWORD_EXPIRE_ANONYMOUS_USER                                                = 3016;
exports.ER_SLAVE_SQL_THREAD_MUST_STOP                                                    = 3017;
exports.ER_NO_FT_MATERIALIZED_SUBQUERY                                                   = 3018;
exports.ER_INNODB_UNDO_LOG_FULL                                                          = 3019;
exports.ER_INVALID_ARGUMENT_FOR_LOGARITHM                                                = 3020;
exports.ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP                                             = 3021;
exports.ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO                                            = 3022;
exports.ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS                                              = 3023;
exports.ER_QUERY_TIMEOUT                                                                 = 3024;
exports.ER_NON_RO_SELECT_DISABLE_TIMER                                                   = 3025;
exports.ER_DUP_LIST_ENTRY                                                                = 3026;
exports.ER_SQL_MODE_NO_EFFECT                                                            = 3027;
exports.ER_AGGREGATE_ORDER_FOR_UNION                                                     = 3028;
exports.ER_AGGREGATE_ORDER_NON_AGG_QUERY                                                 = 3029;
exports.ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR                                       = 3030;
exports.ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER                                      = 3031;
exports.ER_SERVER_OFFLINE_MODE                                                           = 3032;
exports.ER_GIS_DIFFERENT_SRIDS                                                           = 3033;
exports.ER_GIS_UNSUPPORTED_ARGUMENT                                                      = 3034;
exports.ER_GIS_UNKNOWN_ERROR                                                             = 3035;
exports.ER_GIS_UNKNOWN_EXCEPTION                                                         = 3036;
exports.ER_GIS_INVALID_DATA                                                              = 3037;
exports.ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION                                          = 3038;
exports.ER_BOOST_GEOMETRY_CENTROID_EXCEPTION                                             = 3039;
exports.ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION                                = 3040;
exports.ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION                                            = 3041;
exports.ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION                              = 3042;
exports.ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION                                              = 3043;
exports.ER_STD_BAD_ALLOC_ERROR                                                           = 3044;
exports.ER_STD_DOMAIN_ERROR                                                              = 3045;
exports.ER_STD_LENGTH_ERROR                                                              = 3046;
exports.ER_STD_INVALID_ARGUMENT                                                          = 3047;
exports.ER_STD_OUT_OF_RANGE_ERROR                                                        = 3048;
exports.ER_STD_OVERFLOW_ERROR                                                            = 3049;
exports.ER_STD_RANGE_ERROR                                                               = 3050;
exports.ER_STD_UNDERFLOW_ERROR                                                           = 3051;
exports.ER_STD_LOGIC_ERROR                                                               = 3052;
exports.ER_STD_RUNTIME_ERROR                                                             = 3053;
exports.ER_STD_UNKNOWN_EXCEPTION                                                         = 3054;
exports.ER_GIS_DATA_WRONG_ENDIANESS                                                      = 3055;
exports.ER_CHANGE_MASTER_PASSWORD_LENGTH                                                 = 3056;
exports.ER_USER_LOCK_WRONG_NAME                                                          = 3057;
exports.ER_USER_LOCK_DEADLOCK                                                            = 3058;
exports.ER_REPLACE_INACCESSIBLE_ROWS                                                     = 3059;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS                                      = 3060;
exports.ER_ILLEGAL_USER_VAR                                                              = 3061;
exports.ER_GTID_MODE_OFF                                                                 = 3062;
exports.ER_UNSUPPORTED_BY_REPLICATION_THREAD                                             = 3063;
exports.ER_INCORRECT_TYPE                                                                = 3064;
exports.ER_FIELD_IN_ORDER_NOT_SELECT                                                     = 3065;
exports.ER_AGGREGATE_IN_ORDER_NOT_SELECT                                                 = 3066;
exports.ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN                                         = 3067;
exports.ER_NET_OK_PACKET_TOO_LARGE                                                       = 3068;
exports.ER_INVALID_JSON_DATA                                                             = 3069;
exports.ER_INVALID_GEOJSON_MISSING_MEMBER                                                = 3070;
exports.ER_INVALID_GEOJSON_WRONG_TYPE                                                    = 3071;
exports.ER_INVALID_GEOJSON_UNSPECIFIED                                                   = 3072;
exports.ER_DIMENSION_UNSUPPORTED                                                         = 3073;
exports.ER_SLAVE_CHANNEL_DOES_NOT_EXIST                                                  = 3074;
exports.ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT                                             = 3075;
exports.ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG                                        = 3076;
exports.ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY                                            = 3077;
exports.ER_SLAVE_CHANNEL_DELETE                                                          = 3078;
exports.ER_SLAVE_MULTIPLE_CHANNELS_CMD                                                   = 3079;
exports.ER_SLAVE_MAX_CHANNELS_EXCEEDED                                                   = 3080;
exports.ER_SLAVE_CHANNEL_MUST_STOP                                                       = 3081;
exports.ER_SLAVE_CHANNEL_NOT_RUNNING                                                     = 3082;
exports.ER_SLAVE_CHANNEL_WAS_RUNNING                                                     = 3083;
exports.ER_SLAVE_CHANNEL_WAS_NOT_RUNNING                                                 = 3084;
exports.ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP                                            = 3085;
exports.ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER                                                = 3086;
exports.ER_WRONG_FIELD_WITH_GROUP_V2                                                     = 3087;
exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2                                               = 3088;
exports.ER_WARN_DEPRECATED_SYSVAR_UPDATE                                                 = 3089;
exports.ER_WARN_DEPRECATED_SQLMODE                                                       = 3090;
exports.ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID                                    = 3091;
exports.ER_GROUP_REPLICATION_CONFIGURATION                                               = 3092;
exports.ER_GROUP_REPLICATION_RUNNING                                                     = 3093;
exports.ER_GROUP_REPLICATION_APPLIER_INIT_ERROR                                          = 3094;
exports.ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT                                 = 3095;
exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR                           = 3096;
exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR                              = 3097;
exports.ER_BEFORE_DML_VALIDATION_ERROR                                                   = 3098;
exports.ER_PREVENTS_VARIABLE_WITHOUT_RBR                                                 = 3099;
exports.ER_RUN_HOOK_ERROR                                                                = 3100;
exports.ER_TRANSACTION_ROLLBACK_DURING_COMMIT                                            = 3101;
exports.ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED                                      = 3102;
exports.ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN                                   = 3103;
exports.ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN                                          = 3104;
exports.ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN                                        = 3105;
exports.ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN                                        = 3106;
exports.ER_GENERATED_COLUMN_NON_PRIOR                                                    = 3107;
exports.ER_DEPENDENT_BY_GENERATED_COLUMN                                                 = 3108;
exports.ER_GENERATED_COLUMN_REF_AUTO_INC                                                 = 3109;
exports.ER_FEATURE_NOT_AVAILABLE                                                         = 3110;
exports.ER_CANT_SET_GTID_MODE                                                            = 3111;
exports.ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF                                     = 3112;
exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION                                   = 3113;
exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON                                    = 3114;
exports.ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF                                        = 3115;
exports.ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS = 3116;
exports.ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS    = 3117;
exports.ER_ACCOUNT_HAS_BEEN_LOCKED                                                       = 3118;
exports.ER_WRONG_TABLESPACE_NAME                                                         = 3119;
exports.ER_TABLESPACE_IS_NOT_EMPTY                                                       = 3120;
exports.ER_WRONG_FILE_NAME                                                               = 3121;
exports.ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION                                   = 3122;
exports.ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR                                              = 3123;
exports.ER_WARN_BAD_MAX_EXECUTION_TIME                                                   = 3124;
exports.ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME                                           = 3125;
exports.ER_WARN_CONFLICTING_HINT                                                         = 3126;
exports.ER_WARN_UNKNOWN_QB_NAME                                                          = 3127;
exports.ER_UNRESOLVED_HINT_NAME                                                          = 3128;
exports.ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE                                         = 3129;
exports.ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED                                      = 3130;
exports.ER_LOCKING_SERVICE_WRONG_NAME                                                    = 3131;
exports.ER_LOCKING_SERVICE_DEADLOCK                                                      = 3132;
exports.ER_LOCKING_SERVICE_TIMEOUT                                                       = 3133;
exports.ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED                                         = 3134;
exports.ER_SQL_MODE_MERGED                                                               = 3135;
exports.ER_VTOKEN_PLUGIN_TOKEN_MISMATCH                                                  = 3136;
exports.ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND                                                 = 3137;
exports.ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID                                            = 3138;
exports.ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED                                           = 3139;
exports.ER_INVALID_JSON_TEXT                                                             = 3140;
exports.ER_INVALID_JSON_TEXT_IN_PARAM                                                    = 3141;
exports.ER_INVALID_JSON_BINARY_DATA                                                      = 3142;
exports.ER_INVALID_JSON_PATH                                                             = 3143;
exports.ER_INVALID_JSON_CHARSET                                                          = 3144;
exports.ER_INVALID_JSON_CHARSET_IN_FUNCTION                                              = 3145;
exports.ER_INVALID_TYPE_FOR_JSON                                                         = 3146;
exports.ER_INVALID_CAST_TO_JSON                                                          = 3147;
exports.ER_INVALID_JSON_PATH_CHARSET                                                     = 3148;
exports.ER_INVALID_JSON_PATH_WILDCARD                                                    = 3149;
exports.ER_JSON_VALUE_TOO_BIG                                                            = 3150;
exports.ER_JSON_KEY_TOO_BIG                                                              = 3151;
exports.ER_JSON_USED_AS_KEY                                                              = 3152;
exports.ER_JSON_VACUOUS_PATH                                                             = 3153;
exports.ER_JSON_BAD_ONE_OR_ALL_ARG                                                       = 3154;
exports.ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE                                               = 3155;
exports.ER_INVALID_JSON_VALUE_FOR_CAST                                                   = 3156;
exports.ER_JSON_DOCUMENT_TOO_DEEP                                                        = 3157;
exports.ER_JSON_DOCUMENT_NULL_KEY                                                        = 3158;
exports.ER_SECURE_TRANSPORT_REQUIRED                                                     = 3159;
exports.ER_NO_SECURE_TRANSPORTS_CONFIGURED                                               = 3160;
exports.ER_DISABLED_STORAGE_ENGINE                                                       = 3161;
exports.ER_USER_DOES_NOT_EXIST                                                           = 3162;
exports.ER_USER_ALREADY_EXISTS                                                           = 3163;
exports.ER_AUDIT_API_ABORT                                                               = 3164;
exports.ER_INVALID_JSON_PATH_ARRAY_CELL                                                  = 3165;
exports.ER_BUFPOOL_RESIZE_INPROGRESS                                                     = 3166;
exports.ER_FEATURE_DISABLED_SEE_DOC                                                      = 3167;
exports.ER_SERVER_ISNT_AVAILABLE                                                         = 3168;
exports.ER_SESSION_WAS_KILLED                                                            = 3169;
exports.ER_CAPACITY_EXCEEDED                                                             = 3170;
exports.ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER                                          = 3171;
exports.ER_TABLE_NEEDS_UPG_PART                                                          = 3172;
exports.ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID                           = 3173;
exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL                                           = 3174;
exports.ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT                                        = 3175;
exports.ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE                                        = 3176;
exports.ER_LOCK_REFUSED_BY_ENGINE                                                        = 3177;
exports.ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN                                    = 3178;
exports.ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE                                       = 3179;
exports.ER_MASTER_KEY_ROTATION_ERROR_BY_SE                                               = 3180;
exports.ER_MASTER_KEY_ROTATION_BINLOG_FAILED                                             = 3181;
exports.ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE                                            = 3182;
exports.ER_TABLESPACE_CANNOT_ENCRYPT                                                     = 3183;
exports.ER_INVALID_ENCRYPTION_OPTION                                                     = 3184;
exports.ER_CANNOT_FIND_KEY_IN_KEYRING                                                    = 3185;
exports.ER_CAPACITY_EXCEEDED_IN_PARSER                                                   = 3186;
exports.ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE                                          = 3187;
exports.ER_KEYRING_UDF_KEYRING_SERVICE_ERROR                                             = 3188;
exports.ER_USER_COLUMN_OLD_LENGTH                                                        = 3189;
exports.ER_CANT_RESET_MASTER                                                             = 3190;
exports.ER_GROUP_REPLICATION_MAX_GROUP_SIZE                                              = 3191;
exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED                                            = 3192;
exports.ER_TABLE_REFERENCED                                                              = 3193;
exports.ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE                                         = 3194;
exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO                                       = 3195;
exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID                                            = 3196;
exports.ER_XA_RETRY                                                                      = 3197;
exports.ER_KEYRING_AWS_UDF_AWS_KMS_ERROR                                                 = 3198;
exports.ER_BINLOG_UNSAFE_XA                                                              = 3199;
exports.ER_UDF_ERROR                                                                     = 3200;
exports.ER_KEYRING_MIGRATION_FAILURE                                                     = 3201;
exports.ER_KEYRING_ACCESS_DENIED_ERROR                                                   = 3202;
exports.ER_KEYRING_MIGRATION_STATUS                                                      = 3203;
exports.ER_PLUGIN_FAILED_TO_OPEN_TABLES                                                  = 3204;
exports.ER_PLUGIN_FAILED_TO_OPEN_TABLE                                                   = 3205;
exports.ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED                                         = 3206;
exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET                                = 3207;
exports.ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY                                            = 3208;
exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED                               = 3209;
exports.ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED                                          = 3210;
exports.ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE                                          = 3211;
exports.ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED                                            = 3212;
exports.ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS                                      = 3213;
exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE                                           = 3214;
exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT                                          = 3215;
exports.ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED                                              = 3216;
exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE                          = 3217;
exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE                         = 3218;
exports.ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR                                           = 3219;
exports.ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY                                    = 3220;
exports.ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY                                      = 3221;
exports.ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS                                         = 3222;
exports.ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC                           = 3223;
exports.ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER                                         = 3224;
exports.ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER                                         = 3225;
exports.WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP                                     = 3226;
exports.ER_XA_REPLICATION_FILTERS                                                        = 3227;
exports.ER_CANT_OPEN_ERROR_LOG                                                           = 3228;
exports.ER_GROUPING_ON_TIMESTAMP_IN_DST                                                  = 3229;
exports.ER_CANT_START_SERVER_NAMED_PIPE                                                  = 3230;
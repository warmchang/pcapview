/* all possible protocols received from Python socket.getservbyport()
   assign predetermined colors to common protocols, choose one at random for other protocols */
protoColors = {"tcpmux": null,
               "nbp": null,
               "echo": null,
               "zip": null,
               "echo": null,
               "discard": null,
               "systat": null,
               "daytime": null,
               "netstat": null,
               "qotd": null,
               "msp": null,
               "chargen": null,
               "ftp-data": null,
               "ftp": "#bcbd22",
               "ssh": "#d62728",
               "telnet": "#e377c2",
               "smtp": "#9467bd",
               "time": null,
               "rlp": null,
               "nameserver": null,
               "whois": null,
               "tacacs": null,
               "re-mail-ck": null,
               "domain": "#ff7f0e",
               "mtp": null,
               "tacacs-ds": null,
               "bootps": null,
               "bootpc": null,
               "tftp": null,
               "gopher": null,
               "rje": null,
               "finger": null,
               "http": "#1f77b4",
               "link": null,
               "kerberos": null,
               "supdup": null,
               "linuxconf": null,
               "hostnames": null,
               "iso-tsap": null,
               "acr-nema": null,
               "csnet-ns": null,
               "poppassd": null,
               "rtelnet": null,
               "pop2": null,
               "pop3": null,
               "sunrpc": null,
               "auth": null,
               "sftp": "#17becf",
               "uucp-path": null,
               "nntp": null,
               "ntp": null,
               "pwdgen": null,
               "loc-srv": null,
               "netbios-ns": null,
               "netbios-dgm": null,
               "netbios-ssn": null,
               "imap2": null,
               "snmp": null,
               "snmp-trap": null,
               "cmip-man": null,
               "cmip-agent": null,
               "mailq": null,
               "xdmcp": null,
               "nextstep": null,
               "bgp": null,
               "prospero": null,
               "irc": null,
               "smux": null,
               "at-rtmp": null,
               "at-nbp": null,
               "at-echo": null,
               "at-zis": null,
               "qmtp": null,
               "z3950": null,
               "ipx": null,
               "imap3": null,
               "pawserv": null,
               "zserv": null,
               "fatserv": null,
               "rpc2portmap": null,
               "codaauth2": null,
               "clearcase": null,
               "ulistserv": null,
               "ldap": null,
               "imsp": null,
               "svrloc": null,
               "https": "#2ca02c",
               "snpp": null,
               "microsoft-ds": null,
               "kpasswd": null,
               "urd": null,
               "saft": null,
               "isakmp": null,
               "exec": null,
               "login": null,
               "shell": null,
               "printer": null,
               "talk": null,
               "ntalk": null,
               "route": null,
               "timed": null,
               "tempo": null,
               "courier": null,
               "conference": null,
               "netnews": null,
               "netwall": null,
               "gdomap": null,
               "uucp": null,
               "klogin": null,
               "kshell": null,
               "dhcpv6-client": null,
               "dhcpv6-server": null,
               "afpovertcp": null,
               "idfp": null,
               "rtsp": null,
               "remotefs": null,
               "nntps": null,
               "submission": null,
               "nqs": null,
               "npmp-local": null,
               "npmp-gui": null,
               "hmmp-ind": null,
               "asf-rmcp": null,
               "qmqp": null,
               "ipp": null,
               "ldaps": null,
               "tinc": null,
               "silc": null,
               "kerberos-adm": null,
               "kerberos4": null,
               "kerberos-master": null,
               "passwd-server": null,
               "krb-prop": null,
               "krbupdate": null,
               "webster": null,
               "moira-db": null,
               "moira-update": null,
               "moira-ureg": null,
               "spamd": null,
               "omirr": null,
               "supfilesrv": null,
               "rsync": null,
               "swat": null,
               "ftps-data": null,
               "ftps": null,
               "telnets": null,
               "imaps": null,
               "ircs": null,
               "pop3s": null,
               "customs": null,
               "socks": null,
               "proofd": null,
               "rootd": null,
               "rmiregistry": null,
               "kpop": null,
               "supfiledbg": null,
               "skkserv": null,
               "openvpn": null,
               "predict": null,
               "kazaa": null,
               "rmtcfg": null,
               "nessus": null,
               "wipld": null,
               "xtel": null,
               "xtelw": null,
               "lotusnote": null,
               "ms-sql-s": null,
               "ms-sql-m": null,
               "ingreslock": null,
               "prospero-np": null,
               "support": null,
               "datametrics": null,
               "sa-msg-port": null,
               "kermit": null,
               "groupwise": null,
               "l2f": null,
               "radius": null,
               "radius-acct": null,
               "msnp": null,
               "unix-status": null,
               "log-server": null,
               "remoteping": null,
               "cisco-sccp": null,
               "cfinger": null,
               "search": null,
               "nfs": null,
               "knetd": null,
               "gnunet": null,
               "rtcm-sc104": null,
               "zephyr-srv": null,
               "zephyr-clt": null,
               "zephyr-hm": null,
               "eklogin": null,
               "kx": null,
               "gsigatekeeper": null,
               "iprop": null,
               "gris": null,
               "ninstall": null,
               "cvspserver": null,
               "venus": null,
               "venus-se": null,
               "codasrv": null,
               "codasrv-se": null,
               "mon": null,
               "zebrasrv": null,
               "zebra": null,
               "ripd": null,
               "ripngd": null,
               "ospfd": null,
               "bgpd": null,
               "ospf6d": null,
               "ospfapi": null,
               "isisd": null,
               "dict": null,
               "f5-globalsite": null,
               "gsiftp": null,
               "gpsd": null,
               "afbackup": null,
               "afmbackup": null,
               "gds-db": null,
               "icpv2": null,
               "iscsi-target": null,
               "mysql": "#f7b6d2",
               "nut": null,
               "distcc": null,
               "daap": null,
               "svn": null,
               "suucp": null,
               "sysrqd": null,
               "sieve": null,
               "xtell": null,
               "f5-iquery": null,
               "epmd": null,
               "remctl": null,
               "ipsec-nat-t": null,
               "fax": null,
               "hylafax": null,
               "iax": null,
               "distmp3": null,
               "mtn": null,
               "radmin-port": null,
               "munin": null,
               "rfe": null,
               "mmcc": null,
               "enbd-cstatd": null,
               "enbd-sstatd": null,
               "sip": null,
               "sip-tls": null,
               "pcrd": null,
               "aol": null,
               "xmpp-client": null,
               "xmpp-server": null,
               "cfengine": null,
               "mdns": null,
               "noclog": null,
               "hostmon": null,
               "postgresql": "#c5b0d5",
               "rplay": null,
               "freeciv": null,
               "nrpe": null,
               "nsca": null,
               "amqp": "#9edae5",
               "mrtd": null,
               "bgpsim": null,
               "canna": null,
               "ggz": null,
               "x11": null,
               "x11-1": null,
               "x11-2": null,
               "x11-3": null,
               "x11-4": null,
               "x11-5": null,
               "x11-6": null,
               "x11-7": null,
               "gnutella-svc": null,
               "gnutella-rtr": null,
               "sge-qmaster": null,
               "sge-execd": null,
               "mysql-proxy": null,
               "syslog-tls": null,
               "sane-port": null,
               "ircd": null,
               "afs3-fileserver": null,
               "afs3-callback": null,
               "afs3-prserver": null,
               "afs3-vlserver": null,
               "afs3-kaserver": null,
               "afs3-volser": null,
               "afs3-errors": null,
               "afs3-bos": null,
               "afs3-update": null,
               "afs3-rmtsys": null,
               "font-service": null,
               "zope-ftp": null,
               "http-alt": null,
               "tproxy": null,
               "omniorb": null,
               "clc-build-daemon": null,
               "xinetd": null,
               "bacula-dir": null,
               "bacula-fd": null,
               "bacula-sd": null,
               "mandelspawn": null,
               "git": null,
               "xmms2": null,
               "zope": null,
               "webmin": null,
               "zabbix-agent": null,
               "zabbix-trapper": null,
               "amanda": null,
               "kamanda": null,
               "amandaidx": null,
               "amidxtape": null,
               "nbd": null,
               "dicom": null,
               "smsqp": null,
               "hkp": null,
               "bprd": null,
               "bpdbm": null,
               "bpjava-msvc": null,
               "vnetd": null,
               "bpcd": null,
               "vopied": null,
               "xpilot": null,
               "sgi-cmsd": null,
               "sgi-crsd": null,
               "sgi-gcd": null,
               "sgi-cad": null,
               "db-lsp": null,
               "isdnlog": null,
               "vboxd": null,
               "dcap": null,
               "gsidcap": null,
               "wnn6": null,
               "binkp": null,
               "asp": null,
               "csync2": null,
               "dircproxy": null,
               "tfido": null,
               "fido": null}

for (var c in protoColors) {
  if (protoColors[c] === null) {
    protoColors[c] = d3.scale.category20().domain(d3.range(20))(Math.floor(Math.random() * 20)).toString()
  }
}


const handler = {
  get(target, prop) {
    if (target[prop]) {
      return target[prop]
    }
    let color = d3.scale.category20().domain(d3.range(20))(Math.floor(Math.random() * 20)).toString();
    target[prop] = color;
    return color;
  },
};
const proxy = new Proxy(protoColors, handler);
protoColors = proxy;


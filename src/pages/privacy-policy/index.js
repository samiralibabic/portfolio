import React from 'react'
import { Layout } from '../../layout/Layout'
import { StaticPageWrapper, LegalSectionText, LegalSectionH3, LegalSectionH4, LegalSectionList, LegalSectionListItem, LegalNavLink } from '../../styles/styleLegal'
import { NavLink, SectionDivider, SectionSubText, Section, SectionTitle } from '../../styles/GlobalComponents'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <>
      <Layout>

        <Section>
          <Link href="/">
            <NavLink>Back to Home</NavLink>
          </Link>
          <SectionDivider />
        </Section>

        <StaticPageWrapper style={{ flexDirection: 'column' }}>
          <SectionTitle>Datenschutz­erklärung</SectionTitle>

          <LegalSectionText>1. Datenschutz auf einen Blick</LegalSectionText>

          <LegalSectionH3>Allgemeine Hinweise</LegalSectionH3>
          <SectionSubText>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</SectionSubText>

          <LegalSectionH3>Datenerfassung auf dieser Website</LegalSectionH3>
          <LegalSectionH4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</LegalSectionH4>
          <SectionSubText>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.</SectionSubText>
          <LegalSectionH4>Wie erfassen wir Ihre Daten?</LegalSectionH4>
          <SectionSubText>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</SectionSubText>
          <SectionSubText>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</SectionSubText>
          <LegalSectionH4>Wof&uuml;r nutzen wir Ihre Daten?</LegalSectionH4>
          <SectionSubText>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</SectionSubText>
          <LegalSectionH4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</LegalSectionH4>
          <SectionSubText>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</SectionSubText>
          <SectionSubText>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</SectionSubText>

          <LegalSectionH3>Analyse-Tools und Tools von Dritt&shy;anbietern</LegalSectionH3>
          <SectionSubText>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</SectionSubText>

          <LegalSectionText>2. Hosting</LegalSectionText>

          <SectionSubText>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</SectionSubText>
          <LegalSectionH3>Externes Hosting</LegalSectionH3>
          <SectionSubText>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.</SectionSubText>
          <SectionSubText>Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</SectionSubText>
          <SectionSubText>Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</SectionSubText> <SectionSubText>Wir setzen folgende(n) Hoster ein:</SectionSubText><br />
          <SectionSubText>
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            privacy@vercel.com
          </SectionSubText><br />
          <LegalSectionH4>Auftragsverarbeitung</LegalSectionH4>
          <SectionSubText>Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</SectionSubText>

          <LegalSectionText>3. Allgemeine Hinweise und Pflicht&shy;informationen</LegalSectionText>

          <LegalSectionH3>Datenschutz</LegalSectionH3>
          <SectionSubText>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</SectionSubText> <SectionSubText>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</SectionSubText>
          <SectionSubText>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</SectionSubText>
          <LegalSectionH3>Hinweis zur verantwortlichen Stelle</LegalSectionH3>
          <SectionSubText>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</SectionSubText>
          <SectionSubText><br />
            Samir Alibabic<br />
            Klugstra&szlig;e 99<br />
            80637 M&uuml;nchen
          </SectionSubText>
          <SectionSubText>
            Telefon: +49 1516 5727063<br />
            E-Mail: samir.alibabic@gmail.com
          </SectionSubText><br />
          <SectionSubText>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</SectionSubText>

          <LegalSectionH3>Speicherdauer</LegalSectionH3>
          <SectionSubText>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.</SectionSubText>
          <LegalSectionH3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</LegalSectionH3>
          <SectionSubText>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.</SectionSubText>
          <LegalSectionH3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</LegalSectionH3>
          <SectionSubText>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</SectionSubText>
          <LegalSectionH3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</LegalSectionH3>
          <SectionSubText>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</SectionSubText>
          <SectionSubText>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</SectionSubText><LegalSectionH3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</LegalSectionH3>
          <SectionSubText>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</SectionSubText>
          <LegalSectionH3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</LegalSectionH3>
          <SectionSubText>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</SectionSubText>
          <LegalSectionH3>Auskunft, Berichtigung und L&ouml;schung</LegalSectionH3>
          <SectionSubText>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</SectionSubText>
          <LegalSectionH3>Recht auf Einschr&auml;nkung der Verarbeitung</LegalSectionH3>
          <SectionSubText>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</SectionSubText>
          <LegalSectionList>
            <LegalSectionListItem>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</LegalSectionListItem>
            <LegalSectionListItem>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</LegalSectionListItem>
            <LegalSectionListItem>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</LegalSectionListItem>
            <LegalSectionListItem>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</LegalSectionListItem>
          </LegalSectionList>
          <SectionSubText>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</SectionSubText>
          <LegalSectionH3>SSL- bzw. TLS-Verschl&uuml;sselung</LegalSectionH3>
          <SectionSubText>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</SectionSubText>
          <SectionSubText>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</SectionSubText>
          <LegalSectionText>4. Datenerfassung auf dieser Website</LegalSectionText>
          <LegalSectionH3>Server-Log-Dateien</LegalSectionH3>
          <SectionSubText>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:</SectionSubText>
          <LegalSectionList>
            <LegalSectionListItem>Browsertyp und Browserversion</LegalSectionListItem>
            <LegalSectionListItem>verwendetes Betriebssystem</LegalSectionListItem>
            <LegalSectionListItem>Referrer URL</LegalSectionListItem>
            <LegalSectionListItem>Hostname des zugreifenden Rechners</LegalSectionListItem>
            <LegalSectionListItem>Uhrzeit der Serveranfrage</LegalSectionListItem>
            <LegalSectionListItem>IP-Adresse</LegalSectionListItem>
          </LegalSectionList>
          <SectionSubText>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</SectionSubText> <SectionSubText>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.</SectionSubText>
          <LegalSectionH3>Anfrage per E-Mail, Telefon oder Telefax</LegalSectionH3>
          <SectionSubText>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</SectionSubText>
          <SectionSubText>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</SectionSubText>
          <SectionSubText>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</SectionSubText>
          <LegalSectionText>5. Plugins und Tools</LegalSectionText>
          <LegalSectionH3>Font Awesome (lokales Hosting)</LegalSectionH3>
          <SectionSubText>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome ist lokal installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht statt.</SectionSubText>
          <SectionSubText>Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerkl&auml;rung f&uuml;r Font Awesome unter: <Link href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer"><LegalNavLink>https://fontawesome.com/privacy</LegalNavLink></Link>.</SectionSubText><br />

          <SectionSubText>
            Quelle: <Link href="https://www.e-recht24.de" target='_blank'>
              <LegalNavLink>https://www.e-recht24.de</LegalNavLink>
            </Link>
          </SectionSubText>

        </StaticPageWrapper>

        <SectionDivider /> { /* ENGLISH VERSION */}

        <StaticPageWrapper style={{ flexDirection: 'column' }}>
          <SectionTitle>Data Privacy Policy</SectionTitle>

          <LegalSectionText>1. Data Protection at a Glance</LegalSectionText>

          <LegalSectionH3>General Information</LegalSectionH3>
          <SectionSubText>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data refers to any data that can personally identify you. Detailed information on data protection can be found in our privacy policy listed below this text.</SectionSubText>

          <LegalSectionH3>Data Collection on This Website</LegalSectionH3>
          <LegalSectionH4>Who is responsible for data collection on this website?</LegalSectionH4>
          <SectionSubText>The data processing on this website is carried out by the website operator. You can find their contact details in the section "Controller's Information" in this privacy policy.</SectionSubText>
          <LegalSectionH4>How do we collect your data?</LegalSectionH4>
          <SectionSubText>Your data is collected when you provide it to us. This may include data you enter into a contact form, for example.</SectionSubText>
          <SectionSubText>Other data is automatically collected or recorded by our IT systems when you visit the website. This data primarily includes technical information (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter our website.</SectionSubText>
          <LegalSectionH4>What do we use your data for?</LegalSectionH4>
          <SectionSubText>Some of the data is collected to ensure the proper functioning of the website. Other data may be used to analyze your user behavior.</SectionSubText>
          <LegalSectionH4>What rights do you have regarding your data?</LegalSectionH4>
          <SectionSubText>You have the right to receive information about the origin, recipients, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. Furthermore, under certain circumstances, you have the right to request the restriction of processing of your personal data or file a complaint with the competent supervisory authority.</SectionSubText>
          <SectionSubText>You can contact us at any time for these and other questions regarding data protection.</SectionSubText>

          <LegalSectionH3>Analysis Tools and Third-Party Tools</LegalSectionH3>
          <SectionSubText>When you visit this website, your surfing behavior may be statistically evaluated. This is mainly done with analytics programs. Detailed information on these analytics programs can be found in the following privacy policy.</SectionSubText>

          <LegalSectionText>2. Hosting</LegalSectionText>

          <SectionSubText>We host the content of our website with the following provider:</SectionSubText>

          <LegalSectionH3>External Hosting</LegalSectionH3>
          <SectionSubText>This website is externally hosted. The personal data collected on this website is stored on the servers of the hosting provider(s). This may include, among other things, IP addresses, contact requests, metadata and communication data, contract data, contact details, names, website access, and other data generated via a website.</SectionSubText>
          <SectionSubText>The external hosting is carried out for the purpose of fulfilling the contract with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of providing a secure, fast, and efficient provision of our online offering by a professional provider (Art. 6(1)(f) GDPR). If corresponding consent has been requested, processing is carried out exclusively based on Art. 6(1)(a) GDPR and § 25(1) TTDSG, to the extent that the consent includes the storage of cookies or access to information on the user's terminal device (e.g., device fingerprinting) within the meaning of TTDSG. The consent can be revoked at any time.</SectionSubText>
          <SectionSubText>Our host(s) will process your data only to the extent necessary to fulfill its contractual obligations and will follow our instructions regarding this data.</SectionSubText>
          <SectionSubText>We use the following host(s):</SectionSubText><br />
          <SectionSubText>
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            privacy@vercel.com
          </SectionSubText><br />
          <LegalSectionH4>Data Processing Agreement</LegalSectionH4>
          <SectionSubText>We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a legally required contract that ensures that the hosting provider processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.</SectionSubText>

          <LegalSectionText>3. General Information and Mandatory Information</LegalSectionText>
          <LegalSectionH3>Data Protection</LegalSectionH3>
          <SectionSubText>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</SectionSubText>
          <SectionSubText>When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and how we use it. It also explains how and for what purpose this is done.</SectionSubText>
          <SectionSubText>We would like to point out that data transmission over the Internet (e.g., communication by email) may have security vulnerabilities. A complete protection of the data against access by third parties is not possible.</SectionSubText>
          <LegalSectionH3>Controller's Information</LegalSectionH3>
          <SectionSubText>The controller for the data processing on this website is:</SectionSubText>
          <SectionSubText>
            Samir Alibabic<br />
            Klugstraße 99<br />
            80637 München
          </SectionSubText>
          <SectionSubText>
            Phone: +49 1516 5727063<br />
            Email: samir.alibabic@gmail.com
          </SectionSubText><br />
          <SectionSubText>The controller is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).</SectionSubText>
          <LegalSectionH3>Data Retention</LegalSectionH3>
          <SectionSubText>Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to exist. If you make a legitimate request for deletion or revoke your consent for data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial retention periods); in the latter case, deletion will occur after the expiration of these reasons.</SectionSubText>
          <LegalSectionH3>General Information on the Legal Bases for Data Processing on this Website</LegalSectionH3>
          <SectionSubText>If you have given your consent for data processing, we process your personal data based on Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special categories of data pursuant to Art. 9(1) GDPR are processed. In the event of an explicit consent for the transfer of personal data to third countries, the data processing also takes place based on Art. 49(1)(a) GDPR. If you have given your consent for the storage of cookies or access to information on your device (e.g., via device fingerprinting), data processing also takes place based on § 25(1) TTDSG. The consent can be revoked at any time. If your data is necessary for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR. Furthermore, we process your data if it is necessary for compliance with a legal obligation based on Art. 6(1)(c) GDPR. Data processing may also occur based on our legitimate interest according to Art. 6(1)(f) GDPR. The applicable legal bases for each specific case are provided in the following paragraphs of this privacy policy.</SectionSubText>
          <LegalSectionH3>Revocation of Your Consent to Data Processing</LegalSectionH3>
          <SectionSubText>Many data processing operations are only possible with your explicit consent. You can revoke consent that has already been given at any time. The legality of data processing carried out until the revocation remains unaffected by the revocation.</SectionSubText>
          <LegalSectionH3>Right to Object to Data Collection in Special Cases and Direct Marketing (Art. 21 GDPR)</LegalSectionH3>
          <SectionSubText>If data processing is based on Art. 6(1)(e) or (f) GDPR, you have the right to object to the processing of your personal data at any time for reasons arising from your particular situation, including profiling based on these provisions. The respective legal basis for processing can be found in this privacy policy. If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or the processing serves the establishment, exercise, or defense of legal claims (objection pursuant to Art. 21(1) GDPR).</SectionSubText>
          <SectionSubText>If your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of your personal data for the purpose of such advertising, including profiling to the extent that it is related to such direct marketing. If you object, your personal data will no longer be used for direct marketing purposes (objection pursuant to Art. 21(2) GDPR).</SectionSubText>
          <LegalSectionH3>Right to Lodge a Complaint with the Supervisory Authority</LegalSectionH3>
          <SectionSubText>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work, or the place of the alleged infringement. The right to lodge a complaint is without prejudice to any other administrative or judicial remedies.</SectionSubText>
          <LegalSectionH3>Right to Data Portability</LegalSectionH3>
          <SectionSubText>You have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format and have the right to transmit those data to another controller, where technically feasible, if the processing is based on your consent or is necessary for the performance of a contract. If you request the direct transfer of the data to another controller, this will only be done to the extent technically feasible.</SectionSubText>
          <LegalSectionH3>Information, Correction, and Deletion</LegalSectionH3>
          <SectionSubText>Within the scope of applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipients, the purpose of data processing, and, if applicable, the right to correction or deletion of this data. For this purpose, as well as for further questions regarding personal data, you can contact us at any time.</SectionSubText>
          <LegalSectionH3>Right to Restriction of Processing</LegalSectionH3>
          <SectionSubText>You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:</SectionSubText>
          <LegalSectionList>
            <LegalSectionListItem>If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. During the verification period, you have the right to request the restriction of the processing of your personal data.</LegalSectionListItem>
            <LegalSectionListItem>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</LegalSectionListItem>
            <LegalSectionListItem>If we no longer need your personal data, but you require them for the exercise, defense, or assertion of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</LegalSectionListItem>
            <LegalSectionListItem>If you have objected pursuant to Art. 21(1) GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</LegalSectionListItem>
          </LegalSectionList>
          <SectionSubText>If you have restricted the processing of your personal data, except for storage, these data may only be processed with your consent or for the assertion, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.</SectionSubText>
          <LegalSectionH3>SSL/TLS Encryption</LegalSectionH3>
          <SectionSubText>For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL/TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.</SectionSubText>
          <SectionSubText>When SSL/TLS encryption is activated, the data you transmit to us cannot be read by third parties.</SectionSubText>
          <LegalSectionText>4. Data Collection on This Website</LegalSectionText>
          <LegalSectionH3>Server Log Files</LegalSectionH3>
          <SectionSubText>The provider of the website automatically collects and stores information in server log files that your browser automatically transmits to us. These are:</SectionSubText>
          <LegalSectionList>
            <LegalSectionListItem>Browser type and browser version</LegalSectionListItem>
            <LegalSectionListItem>Operating system used</LegalSectionListItem>
            <LegalSectionListItem>Referrer URL</LegalSectionListItem>
            <LegalSectionListItem>Host name of the accessing computer</LegalSectionListItem>
            <LegalSectionListItem>Time of the server request</LegalSectionListItem>
            <LegalSectionListItem>IP address</LegalSectionListItem>
          </LegalSectionList>
          <SectionSubText>These data will not be merged with other data sources.</SectionSubText>
          <SectionSubText>The collection of this data is based on Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of their website. For this purpose, the server log files must be collected.</SectionSubText>
          <LegalSectionH3>Inquiry via Email, Telephone, or Fax</LegalSectionH3>
          <SectionSubText>If you contact us via email, telephone, or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We will not share this data without your consent.</SectionSubText>
          <SectionSubText>The processing of this data is based on Art. 6(1)(b) GDPR, provided that your inquiry is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR), if it has been requested; the consent can be revoked at any time.</SectionSubText>
          <SectionSubText>The data you send to us via contact inquiries will remain with us until you request us to delete it, revoke your consent to its storage, or the purpose for its storage no longer applies (e.g., after we have completed processing your request). Mandatory statutory provisions, especially retention periods, remain unaffected.</SectionSubText>
          <LegalSectionText>5. Plugins and Tools</LegalSectionText>
          <LegalSectionH3>Font Awesome (Local Hosting)</LegalSectionH3>
          <SectionSubText>This site uses Font Awesome for the consistent display of fonts. Font Awesome is locally installed, and there is no connection to servers of Fonticons, Inc.</SectionSubText>
          <SectionSubText>For more information about Font Awesome, please refer to the Font Awesome Privacy Policy at: <Link href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer"><LegalNavLink>https://fontawesome.com/privacy</LegalNavLink></Link>.</SectionSubText><br />

        </StaticPageWrapper>
      </Layout>
    </>
  )
}

export default PrivacyPolicy
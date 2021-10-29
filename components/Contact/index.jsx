const Contact = () => {
    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe
                    width={'100%'}
                    height={294}
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14055.252430426981!2d-52.3960826!3d-28.2736833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7db4fab0fa483c4!2ssomasys!5e0!3m2!1spt-BR!2sbr!4v1635446100529!5m2!1spt-BR!2sbr"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                />
                <a href="https://www.whatismyip-address.com/divi-discount/" />
                <br />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            ".mapouter{position:relative;text-align:right;height:294px;width:'100%';}"
                    }}
                />
                <a href="https://www.embedgooglemap.net" />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            ".gmap_canvas {overflow:hidden;background:none!important;height:294px;width:'100%';}"
                    }}
                />
            </div>
        </div>
    )
}

export default Contact;
package com.wedding.directory.modal.advertisement;

import javax.persistence.*;

@Entity
@Table(name = "packages")
public class Packages {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pack_id")
    private int id;

    @Column(name = "package_image_1",length = 1000)
    private String packageImage1;

    @Column(name = "package_image_2",length = 1000)
    private String packageImage2;

    @Column(name = "package_image_3",length = 1000)
    private String packageImage3;

    @Column(name = "package_image_4",length = 1000)
    private String packageImage4;

    @Column(name = "package_image_5",length = 1000)
    private String packageImage5;

    @Column(name = "package_image_6",length = 1000)
    private String packageImage6;

    @Column(name = "package_Name_1")
    private String packageName1;

    @Column(name = "package_Name_2")
    private String packageName2;

    @Column(name = "package_Name_3")
    private String packageName3;

    @Column(name = "package_Name_4")
    private String packageName4;

    @Column(name = "package_Name_5")
    private String packageName5;

    @Column(name = "package_Name_6")
    private String packageName6;

    @Column(name = "package_Desc_1",length = 1000)
    private String packageDes1;

    @Column(name = "package_Des_2",length = 1000)
    private String packageDes2;

    @Column(name = "package_Des_3",length = 1000)
    private String packageDes3;

    @Column(name = "package_Des_4",length = 1000)
    private String packageDes4;

    @Column(name = "package_Des_5",length = 1000)
    private String packageDes5;

    @Column(name = "package_Des_6",length = 1000)
    private String packageDes6;

    @Column(name = "package_Price_1")
    private String packagePrice1;

    @Column(name = "package_Price_2")
    private String packagePrice2;

    @Column(name = "package_Price_3")
    private String packagePrice3;

    @Column(name = "package_Price_4")
    private String packagePrice4;

    @Column(name = "package_Price_5")
    private String packagePrice5;

    @Column(name = "package_Price_6")
    private String packagePrice6;

    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "packages")
    private ADProfile adProfile;

    public ADProfile getAdProfile() {
        return adProfile;
    }

    public void setAdProfile(ADProfile adProfile) {
        this.adProfile = adProfile;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPackageImage1() {
        return packageImage1;
    }

    public void setPackageImage1(String packageImage1) {
        this.packageImage1 = packageImage1;
    }

    public String getPackageImage2() {
        return packageImage2;
    }

    public void setPackageImage2(String packageImage2) {
        this.packageImage2 = packageImage2;
    }

    public String getPackageImage3() {
        return packageImage3;
    }

    public void setPackageImage3(String packageImage3) {
        this.packageImage3 = packageImage3;
    }

    public String getPackageImage4() {
        return packageImage4;
    }

    public void setPackageImage4(String packageImage4) {
        this.packageImage4 = packageImage4;
    }

    public String getPackageImage5() {
        return packageImage5;
    }

    public void setPackageImage5(String packageImage5) {
        this.packageImage5 = packageImage5;
    }

    public String getPackageImage6() {
        return packageImage6;
    }

    public void setPackageImage6(String packageImage6) {
        this.packageImage6 = packageImage6;
    }

    public String getPackageName1() {
        return packageName1;
    }

    public void setPackageName1(String packageName1) {
        this.packageName1 = packageName1;
    }

    public String getPackageName2() {
        return packageName2;
    }

    public void setPackageName2(String packageName2) {
        this.packageName2 = packageName2;
    }

    public String getPackageName3() {
        return packageName3;
    }

    public void setPackageName3(String packageName3) {
        this.packageName3 = packageName3;
    }

    public String getPackageName4() {
        return packageName4;
    }

    public void setPackageName4(String packageName4) {
        this.packageName4 = packageName4;
    }

    public String getPackageName5() {
        return packageName5;
    }

    public void setPackageName5(String packageName5) {
        this.packageName5 = packageName5;
    }

    public String getPackageName6() {
        return packageName6;
    }

    public void setPackageName6(String packageName6) {
        this.packageName6 = packageName6;
    }

    public String getPackageDes1() {
        return packageDes1;
    }

    public void setPackageDes1(String packageDes1) {
        this.packageDes1 = packageDes1;
    }

    public String getPackageDes2() {
        return packageDes2;
    }

    public void setPackageDes2(String packageDes2) {
        this.packageDes2 = packageDes2;
    }

    public String getPackageDes3() {
        return packageDes3;
    }

    public void setPackageDes3(String packageDes3) {
        this.packageDes3 = packageDes3;
    }

    public String getPackageDes4() {
        return packageDes4;
    }

    public void setPackageDes4(String packageDes4) {
        this.packageDes4 = packageDes4;
    }

    public String getPackageDes5() {
        return packageDes5;
    }

    public void setPackageDes5(String packageDes5) {
        this.packageDes5 = packageDes5;
    }

    public String getPackageDes6() {
        return packageDes6;
    }

    public void setPackageDes6(String packageDes6) {
        this.packageDes6 = packageDes6;
    }

    public String getPackagePrice1() {
        return packagePrice1;
    }

    public void setPackagePrice1(String packagePrice1) {
        this.packagePrice1 = packagePrice1;
    }

    public String getPackagePrice2() {
        return packagePrice2;
    }

    public void setPackagePrice2(String packagePrice2) {
        this.packagePrice2 = packagePrice2;
    }

    public String getPackagePrice3() {
        return packagePrice3;
    }

    public void setPackagePrice3(String packagePrice3) {
        this.packagePrice3 = packagePrice3;
    }

    public String getPackagePrice4() {
        return packagePrice4;
    }

    public void setPackagePrice4(String packagePrice4) {
        this.packagePrice4 = packagePrice4;
    }

    public String getPackagePrice5() {
        return packagePrice5;
    }

    public void setPackagePrice5(String packagePrice5) {
        this.packagePrice5 = packagePrice5;
    }

    public String getPackagePrice6() {
        return packagePrice6;
    }

    public void setPackagePrice6(String packagePrice6) {
        this.packagePrice6 = packagePrice6;
    }
}
